"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import emailjs from '@emailjs/browser';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ParticleField = dynamic(() => import("../three/ParticleField"), {
  ssr: false,
});

export default function Contact() {
  const containerRef = useRef(null);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-reveal",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // NOTE: Replace these with your actual EmailJS credentials
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    try {
      if (serviceId === "YOUR_SERVICE_ID") {
        // Simulate a successful form submission if keys are not set
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
      } else {
        await emailjs.send(serviceId, templateId, formData, publicKey);
        setStatus('success');
      }
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000); // Clear status after 5s
    }
  };

  return (
    <section id="contact" ref={containerRef} className="py-24 md:py-32 bg-premium-black relative overflow-hidden min-h-screen flex items-center">
      <ParticleField />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 justify-between items-start">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="contact-reveal text-sm font-mono tracking-[0.3em] text-premium-accent mb-8">
              CONTACT
            </div>
            
            <h2 className="contact-reveal text-5xl md:text-7xl lg:text-[7vw] font-bold tracking-tighter text-white mb-8 leading-[0.9]">
              LET&apos;S BUILD<br/>
              <span className="text-transparent text-border">SOMETHING</span><br/>
              GREAT.
            </h2>
            
            <p className="contact-reveal text-xl font-light text-premium-offwhite/80 max-w-md mb-12">
              Have a project, product or web application in mind? Drop a message and let&apos;s connect.
            </p>
            
            <div className="contact-reveal flex flex-col sm:flex-row gap-6">
              <a 
                href="mailto:pradeepyadav8253@gmail.com"
                className="interactable group flex items-center justify-center gap-3 text-sm font-mono tracking-widest text-white hover:text-premium-accent transition-colors border border-premium-border px-6 py-4 rounded-sm hover:border-premium-accent bg-premium-gray/20 backdrop-blur-sm"
              >
                EMAIL ME
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="interactable group flex items-center justify-center gap-3 text-sm font-mono tracking-widest text-white hover:text-premium-accent transition-colors border border-premium-border px-6 py-4 rounded-sm hover:border-premium-accent bg-premium-gray/20 backdrop-blur-sm"
              >
                LINKEDIN
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Form Content */}
          <div className="lg:w-[45%] w-full contact-reveal">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-premium-gray/10 backdrop-blur-md border border-premium-border p-8 md:p-10 rounded-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono tracking-widest text-premium-offwhite/60">YOUR NAME</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="interactable bg-transparent border-b border-premium-border py-3 text-white focus:outline-none focus:border-premium-accent transition-colors placeholder:text-premium-offwhite/20"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono tracking-widest text-premium-offwhite/60">YOUR EMAIL</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="interactable bg-transparent border-b border-premium-border py-3 text-white focus:outline-none focus:border-premium-accent transition-colors placeholder:text-premium-offwhite/20"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono tracking-widest text-premium-offwhite/60">YOUR MESSAGE</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="interactable bg-transparent border-b border-premium-border py-3 text-white focus:outline-none focus:border-premium-accent transition-colors placeholder:text-premium-offwhite/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="interactable mt-4 bg-white text-premium-black font-bold tracking-widest text-sm py-4 rounded-sm hover:bg-premium-accent hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>

              {status === 'success' && (
                <p className="text-premium-accent text-sm font-mono text-center mt-2">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm font-mono text-center mt-2">Failed to send. Please try again.</p>
              )}
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
