import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

// VS Code "Dark+" style syntax palette, reused across the 3D graph and the
// floating token layer so the whole background reads as one editor theme.
const SYNTAX = {
  keyword: "#569CD6", // blue
  string: "#CE9178", // orange
  func: "#DCDCAA", // yellow
  type: "#4EC9B0", // teal
  number: "#B5CEA8", // light green
  punct: "#D4D4D4", // gray-white
  accent: "#C586C0", // purple/pink
};

const NODE_COLORS = [SYNTAX.keyword, SYNTAX.type, SYNTAX.func, SYNTAX.accent];

// Wider spread (roughly -7..7 x, -5..5 y) so the graph reaches toward the
// screen edges instead of sitting as a small cluster in the center.
function buildNodes() {
  const raw = [
    [-6.6, 4.0, 0], [-5.4, 1.8, 0], [-6.0, -1.4, 0], [-4.8, -3.6, 0],
    [-2.6, -4.4, 0], [0.2, -4.7, 0], [2.8, -4.2, 0], [5.0, -3.4, 0],
    [6.4, -1.2, 0], [6.8, 1.6, 0], [5.6, 3.8, 0], [3.0, 4.6, 0],
    [0.4, 4.4, 0], [-2.2, 4.2, 0], [-3.6, 2.4, 0], [-1.2, 2.2, 0],
    [1.4, 2.0, 0], [3.6, 1.4, 0], [4.6, -0.6, 0], [2.6, -1.6, 0],
    [0.2, -2.0, 0], [-2.0, -1.8, 0], [-3.8, -0.2, 0], [-1.4, 0.2, 0],
    [1.0, -0.2, 0],
  ];
  return raw;
}

function buildConnections(nodeCount) {
  const conns = [];
  // ring through the outer nodes
  const ringSize = 14;
  for (let i = 0; i < ringSize; i++) {
    conns.push([i, (i + 1) % ringSize]);
  }
  // spokes into the inner cluster
  const inner = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  inner.forEach((idx, i) => {
    conns.push([idx, i % ringSize]);
    if (i > 0) conns.push([idx, inner[i - 1]]);
  });
  return conns;
}

function DependencyGraph() {
  const groupRef = useRef();
  const nodeRefs = useRef([]);

  const nodes = useMemo(() => buildNodes(), []);
  const connections = useMemo(() => buildConnections(nodes.length), [nodes.length]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.03) * 0.012;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.025) * 0.006;
    }

    nodeRefs.current.forEach((node, index) => {
      if (node) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.1 + index * 0.6) * 0.06;
        node.scale.setScalar(pulse);
      }
    });
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, -1.1]}>
        <planeGeometry args={[26, 18]} />
        <meshBasicMaterial color="#0A0E14" transparent opacity={0.2} />
      </mesh>

      <mesh position={[0, 0, -0.95]}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshBasicMaterial color="#1B2A3E" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>

      {connections.map(([from, to], index) => {
        const start = nodes[from];
        const end = nodes[to];
        if (!start || !end) return null;
        return (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              setFromPoints={[
                new THREE.Vector3(start[0], start[1], start[2]),
                new THREE.Vector3(end[0], end[1], end[2]),
              ]}
            />
            <lineBasicMaterial color="#4A5568" transparent opacity={0.18} />
          </line>
        );
      })}

      {nodes.map((position, index) => {
        const color = NODE_COLORS[index % NODE_COLORS.length];
        return (
          <mesh key={index} ref={(el) => (nodeRefs.current[index] = el)} position={position}>
            <sphereGeometry args={[0.055, 12, 12]} />
            <meshBasicMaterial color={color} transparent opacity={0.55} />
          </mesh>
        );
      })}

      <ambientLight intensity={0.02} />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#569CD6" />
      <pointLight position={[4, -3, 2]} intensity={0.28} color="#C586C0" />
    </group>
  );
}

function FloatingCodeLayer() {
  // Real syntax-colored tokens, now enough of them (and spread with a
  // deterministic pseudo-random layout) to cover the full viewport
  // including corners and edges, not just the center.
  const tokens = [
    { text: "const", color: SYNTAX.keyword },
    { text: "=>", color: SYNTAX.punct },
    { text: "useEffect()", color: SYNTAX.func },
    { text: "async", color: SYNTAX.keyword },
    { text: "Promise<T>", color: SYNTAX.type },
    { text: "return", color: SYNTAX.keyword },
    { text: "props", color: SYNTAX.punct },
    { text: "{ ...state }", color: SYNTAX.punct },
    { text: "map()", color: SYNTAX.func },
    { text: "npm run build", color: SYNTAX.string },
    { text: "interface", color: SYNTAX.keyword },
    { text: "0.008ms", color: SYNTAX.number },
    { text: "import", color: SYNTAX.keyword },
    { text: "git commit", color: SYNTAX.string },
    { text: "O(n log n)", color: SYNTAX.type },
    { text: "export default", color: SYNTAX.keyword },
    { text: "useState()", color: SYNTAX.func },
    { text: "[]: number[]", color: SYNTAX.type },
    { text: "try / catch", color: SYNTAX.keyword },
    { text: "fetch()", color: SYNTAX.func },
    { text: "200 OK", color: SYNTAX.string },
    { text: "class", color: SYNTAX.keyword },
    { text: "docker build", color: SYNTAX.string },
    { text: "==", color: SYNTAX.punct },
    { text: "npm test", color: SYNTAX.string },
    { text: "&&", color: SYNTAX.punct },
    { text: "O(1)", color: SYNTAX.type },
    { text: "await", color: SYNTAX.keyword },
  ];

  // Pseudo-random-but-deterministic scatter across the full 0-100% grid,
  // biased to also hit the edges/corners rather than clustering centrally.
  const seeded = tokens.map((token, index) => {
    const seedA = (index * 37 + 11) % 97;
    const seedB = (index * 53 + 29) % 89;
    const left = (seedA * 1.03) % 100;
    const top = (seedB * 1.12) % 100;
    return { ...token, left, top, seed: index };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {seeded.map((token, index) => {
        const size = 12 + (index % 4) * 4;
        const opacity = 0.15 + (index % 4) * 0.04;

        return (
          <span
            key={index}
            className="absolute font-mono"
            style={{
              left: `${token.left}%`,
              top: `${token.top}%`,
              fontSize: `${size}px`,
              opacity,
              color: token.color,
              transform: `translateY(${Math.sin(index * 0.8) * 8}px)`,
              animation: `floatCode ${7 + (index % 3) * 2}s ease-in-out infinite`,
              animationDelay: `${(index % 5) * 0.6}s`,
            }}
          >
            {token.text}
          </span>
        );
      })}
      <style>{`
        @keyframes floatCode {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(6px); }
        }
        @keyframes cursorBlink {
          0%, 45% { opacity: 0.6; }
          50%, 95% { opacity: 0; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

function EditorChromeOverlay() {
  // Faint line-number gutter rhythm covering the full height + a terminal
  // status readout, so the fill feels continuous edge-to-edge.
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: "linear-gradient(rgba(214,214,214,0.5) 1px, transparent 1px)",
          backgroundSize: "100% 24px",
        }}
      />
      <div
        className="absolute top-0 bottom-0"
        style={{ left: "4%", width: 1, background: "rgba(86,156,214,0.15)" }}
      />
      <div
        className="absolute top-0 bottom-0"
        style={{ right: "4%", width: 1, background: "rgba(197,134,192,0.1)" }}
      />

      <div
        className="absolute font-mono"
        style={{
          bottom: "5%",
          left: "5%",
          fontSize: "11px",
          letterSpacing: "0.04em",
          color: SYNTAX.number,
          opacity: 0.22,
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span style={{ color: SYNTAX.accent }}>~/portfolio</span>
        <span style={{ color: SYNTAX.punct }}>main</span>
        <span style={{ color: SYNTAX.type }}>✓ build passing</span>
        <span
          style={{
            display: "inline-block",
            width: 7,
            height: 13,
            background: SYNTAX.string,
            marginLeft: 4,
            animation: "cursorBlink 1.1s step-end infinite",
          }}
        />
      </div>
    </div>
  );
}

function Scene() {
  return (
    <>
      <directionalLight position={[-8, 4, 8]} intensity={2.2} color="#ffffff" />
      <directionalLight position={[6, -2, -6]} intensity={0.25} color="#569CD6" />
      <DependencyGraph />
    </>
  );
}

function StaticMobileBackground() {
  const nodes = useMemo(() => {
    const positions = [
      { top: 8, left: 10 }, { top: 18, left: 32 }, { top: 12, left: 58 }, { top: 22, left: 82 },
      { top: 34, left: 18 }, { top: 40, left: 46 }, { top: 36, left: 72 }, { top: 30, left: 92 },
      { top: 52, left: 6 }, { top: 58, left: 28 }, { top: 50, left: 54 }, { top: 60, left: 78 },
      { top: 72, left: 14 }, { top: 78, left: 40 }, { top: 70, left: 64 }, { top: 80, left: 88 },
      { top: 90, left: 22 }, { top: 94, left: 50 }, { top: 88, left: 76 },
    ];
    const colors = [SYNTAX.keyword, SYNTAX.type, SYNTAX.func, SYNTAX.accent];
    return positions.map((p, i) => ({ ...p, color: colors[i % colors.length] }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0A0E14]">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(rgba(214,214,214,0.5) 1px, transparent 1px)",
          backgroundSize: "100% 24px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(86,156,214,0.12), transparent 45%), radial-gradient(circle at 80% 80%, rgba(197,134,192,0.1), transparent 40%), radial-gradient(circle at 50% 50%, rgba(78,201,176,0.08), transparent 50%)",
        }}
      />
      {nodes.map((node, index) => (
        <span
          key={index}
          className="absolute rounded-full"
          style={{
            top: `${node.top}%`,
            left: `${node.left}%`,
            width: 3,
            height: 3,
            background: node.color,
            opacity: 0.32,
          }}
        />
      ))}
    </div>
  );
}

export default function SolarSystemBackground() {
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#0A0E14]">
      {isMobile ? (
        <StaticMobileBackground />
      ) : (
        <>
          <Canvas
            camera={{ position: [0, 0, 7], fov: 42 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            onCreated={({ gl }) => gl.setClearColor("#0A0E14", 1)}
          >
            <Scene />
          </Canvas>
          <FloatingCodeLayer />
          <EditorChromeOverlay />
        </>
      )}

      {/* content that sits above this background (your page) reads as
          floating on top since this whole layer is fixed at -z-10 */}
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_55%,rgba(10,14,20,0.55)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/25 via-[#0A0E14]/50 to-[#0A0E14]/85" />
    </div>
  );
}