function Panel({ id, children, className = "" }) {
  return (
    <section
      id={id}
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 800px" }}
      className={`relative mx-4 sm:mx-8 md:mx-16 lg:mx-24 my-12 md:my-20 rounded-[2rem] border border-white/10 bg-[#121126]/5 backdrop-blur-2xl shadow-[0_30px_100px_-40px_rgba(0,0,0,0.8)] overflow-hidden [transform:translateZ(0)] ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="p-6 sm:p-10 md:p-14">
        {children}
      </div>
    </section>
  );
}

export default Panel;