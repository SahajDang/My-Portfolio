import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import * as emailjs from "@emailjs/browser";
import { eyebrow, heading, gradientText, bodyText, fontMono, btnPrimary } from "./designTokens";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const hasEmailJsConfig = Boolean(serviceId && templateId && publicKey);

      if (hasEmailJsConfig) {
        const templateParams = {
          name: formData.name,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "hello@sahajdang.dev",
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        const mailtoLink = `mailto:sahajdang71@gmail.com?subject=${encodeURIComponent(`Portfolio contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const inputClasses =
    `w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-[#F8F4FF] placeholder-[#A69CB9] focus:border-[#A56BFF]/50 focus:outline-none focus:ring-2 focus:ring-[#A56BFF]/20 transition-all ${fontMono} text-sm`;

  return (
    <div className="text-center">
      <p className={eyebrow}>08 — Contact</p>
      <h2 className={`${heading} mt-3 mb-4`}>
        Let&apos;s <span className={gradientText}>Build Something Meaningful</span>
      </h2>
      <p className={`${bodyText} mb-10 max-w-xl mx-auto`}>
        Have a project, idea, or opportunity in mind? Let&apos;s connect and build something great together.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <a href="mailto:sahajdang71@gmail.com" className={`flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-white/10 hover:border-[#A56BFF]/40 rounded-xl transition-all duration-300 ${fontMono} text-sm`}>
          <Mail className="text-[#A56BFF]" size={18} />
          <span className="text-[#C9BEE0]">sahajdang71@gmail.com</span>
        </a>

        <a href="https://github.com/sahajdang" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.03] border border-white/10 hover:border-[#A56BFF]/40 rounded-xl transition-all duration-300">
          <Github className="text-[#C9BEE0]" size={20} />
        </a>

        <a href="https://www.linkedin.com/in/sahaj-dang-b72507217/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.03] border border-white/10 hover:border-[#A56BFF]/40 rounded-xl transition-all duration-300">
          <Linkedin className="text-[#C29BFF]" size={20} />
        </a>

        <a href="https://leetcode.com/sahajdang" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.03] border border-white/10 hover:border-[#A56BFF]/40 rounded-xl transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#A56BFF]">
            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.036l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039z" />
          </svg>
        </a>
      </div>

      <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-left">
        {submitStatus === "success" && (
          <div className={`mb-6 p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg flex items-center gap-2 ${fontMono} text-sm`}>
            <CheckCircle size={18} />
            <span>Message sent successfully! I&apos;ll get back to you soon.</span>
          </div>
        )}
        {submitStatus === "error" && (
          <div className={`mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg ${fontMono} text-sm`}>
            Something went wrong. Please try again or email me directly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className={inputClasses} />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className={inputClasses} />
          </div>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Tell me about your project, idea, or requirement..." required className={`${inputClasses} resize-none`} />
          <button type="submit" disabled={isSubmitting} className={`${btnPrimary} w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed`}>
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0A0D16]" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
