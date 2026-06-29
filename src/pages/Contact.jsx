"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

const contactInfo = [
  { icon: <FaEnvelope />, label: "Email", value: "pradeep@example.com" },
  { icon: <FaPhone />, label: "Phone", value: "+91 00000 00000" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "India" },
];

export default function ContactPage() {
  useEffect(() => {
    gsap.fromTo(
      ".contact-info-item",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.2, delay: 0.3 },
    );
  }, []);

  return (
    <div className="dark:bg-slate bg-white min-h-full overflow-y-auto pb-20">
      <Header header="Contact" colorText="Me" label="CONTACT" />
      <div className="px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <h2 className="text-2xl font-bold dark:text-white text-grayMedium mb-6">
              Get In Touch
            </h2>
            <p className="dark:text-grayLight text-grayMedium leading-relaxed mb-8">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Send me a message and I'll get back to you as soon as
              possible.
            </p>
            <div className="space-y-6">
              {contactInfo.map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="contact-info-item flex items-center gap-4"
                >
                  <span className="text-2xl dark:text-orange text-green">
                    {icon}
                  </span>
                  <div>
                    <p className="text-sm dark:text-grayLight text-grayMedium opacity-70">
                      {label}
                    </p>
                    <p className="font-semibold dark:text-white text-grayMedium">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-3/5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
