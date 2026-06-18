import React, { useState, useRef } from "react";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiLoader } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (errors.form) {
      setErrors((prev) => ({ ...prev, form: "" }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setShowSuccess(false);

  
    const SERVICE_ID = "service_gc90dgn";
    const TEMPLATE_ID = "template_meboxlj";
    const PUBLIC_KEY = "BAFKDsaQkYBPwFWqA";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setShowSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setErrors({ form: "Could not send message. Please check connection or try again." });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Titles */}
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn delay={0}>
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-4 tracking-tight">
              Let's Work Together
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-sm text-white/50 max-w-md leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </FadeIn>
        </div>

        {/* Content Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Interactive Input Form Frame */}
          <div className="lg:col-span-7 bg-[#111111]/40 border border-white/5 rounded-3xl p-6 md:p-8 relative">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-white/60 tracking-wide">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full bg-black/50 border rounded-2xl px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 ${
                    errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-primary/30"
                  }`}
                />
                {errors.name && <span className="text-xs text-red-400 font-mono pl-1">{errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-white/60 tracking-wide">Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full bg-black/50 border rounded-2xl px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 ${
                    errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-primary/30"
                  }`}
                />
                {errors.email && <span className="text-xs text-red-400 font-mono pl-1">{errors.email}</span>}
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-white/60 tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className={`w-full bg-black/50 border rounded-2xl px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 resize-none ${
                    errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-primary/40 focus:shadow-[0_0_15px_rgba(141,255,105,0.05)]"
                  }`}
                />
                {errors.message && <span className="text-xs text-red-400 font-mono pl-1">{errors.message}</span>}
              </div>

              {/* Global Error Display */}
              {errors.form && (
                <div className="text-xs text-red-400 font-mono pl-1 animate-fadeIn">
                  {errors.form}
                </div>
              )}

              {/* Submit CTA Trigger Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 bg-linear-to-r from-[#50b82f] to-primary hover:opacity-95 text-black font-medium text-sm rounded-2xl py-4 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Success Alert Block: Appears directly under input actions matching image_8354ae.png */}
            {showSuccess && (
              <div className="mt-4 bg-primary/5 border border-primary/20 rounded-2xl px-5 py-4 animate-fadeIn">
                <p className="text-sm text-primary font-medium tracking-wide">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}
          </div>

          {/* Right Side: Informational Links Stack */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-6">
            <div>
              <h3 className="text-xl font-medium text-white mb-3">Let's Connect</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            {/* Micro Context Cards */}
            <div className="flex flex-col gap-4">
              {/* Email Capsule */}
              <div className="flex items-center gap-4 bg-[#111111]/40 border border-white/5 rounded-2xl p-5">
                <div className="p-3 bg-primary/5 border border-primary/10 rounded-xl text-primary">
                  <FiMail className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-white/40">Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm text-white/80 hover:text-primary transition-colors font-medium">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location Capsule */}
              <div className="flex items-center gap-4 bg-[#111111]/40 border border-white/5 rounded-2xl p-5">
                <div className="p-3 bg-primary/5 border border-primary/10 rounded-xl text-primary">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-white/40">Location</span>
                  <span className="text-sm text-white/80 font-medium">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Platform Footprints */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider font-mono">
                Connect with me
              </h4>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.github && (
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-[#111111]/60 border border-white/5 hover:border-primary/30 text-white/60 hover:text-primary rounded-2xl transition-all duration-300"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                )}
                {SOCIAL_LINKS.linkedin && (
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-[#111111]/60 border border-white/5 hover:border-primary/30 text-white/60 hover:text-primary rounded-2xl transition-all duration-300"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                )}
                {SOCIAL_LINKS.twitter && (
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-[#111111]/60 border border-white/5 hover:border-primary/30 text-white/60 hover:text-primary rounded-2xl transition-all duration-300"
                  >
                    <FiTwitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;