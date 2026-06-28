import React, { useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaSmile, FaExclamationCircle } from "react-icons/fa";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const initialUser = { name: "", email: "", subject: "", message: "" };

function ContactForm() {
  const formRef = useRef(null);
  const [user, setUser] = useState(initialUser);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    gsap.fromTo(
      ".input-container",
      { x: 500, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.5, stagger: 0.3 },
    );
  }, []);

  const updateUser = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const showGreet = () => {
    gsap.fromTo(
      ".input-container",
      { x: 0, opacity: 1 },
      { x: 500, opacity: 0, delay: 0.1, stagger: 0.1 },
    );
    gsap.fromTo(
      ".greet-text",
      { x: 500, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.6, stagger: 0.3 },
    );
  };

  const validate = () => {
    const { name, email, subject, message } = user;
    if (!name.trim()) return "Name is required.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Valid email is required.";
    if (!subject.trim()) return "Subject is required.";
    if (!message.trim()) return "Message is required.";
    return null;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const templateParams = {
      from_name: user.name,
      from_email: user.email,
      subject: user.subject,
      message: user.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setUser(initialUser);
      showGreet();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email directly.");
    }
  };

  return (
    <form
      ref={formRef}
      className="relative overflow-hidden text-center"
      onSubmit={submitForm}
      noValidate
    >
      <div className="flex-1 input-container">
        <input
          type="text"
          name="name"
          placeholder=" "
          onChange={updateUser}
          value={user.name}
          className="input-field"
          disabled={status === "sending"}
        />
        <label className="input-label">NAME</label>
      </div>

      <div className="flex-1 input-container">
        <input
          type="email"
          name="email"
          placeholder=" "
          onChange={updateUser}
          value={user.email}
          className="input-field"
          disabled={status === "sending"}
        />
        <label className="input-label">EMAIL</label>
      </div>

      <div className="input-container">
        <input
          type="text"
          name="subject"
          placeholder=" "
          onChange={updateUser}
          value={user.subject}
          className="input-field"
          disabled={status === "sending"}
        />
        <label className="input-label">YOUR SUBJECT</label>
      </div>

      <div className="input-container">
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder=" "
          onChange={updateUser}
          value={user.message}
          className="input-field"
          disabled={status === "sending"}
        />
        <label className="input-label">YOUR MESSAGE</label>
      </div>

      {/* Error / sending alert */}
      {errorMsg && (
        <div className="flex items-center justify-center gap-2 px-3 py-2 mb-2 text-white bg-red-500 rounded-xl">
          <FaExclamationCircle />
          <span>{errorMsg}</span>
        </div>
      )}

      {status === "sending" && (
        <div className="px-3 py-2 mb-2 text-white rounded-xl dark:bg-orange bg-green animate-pulse">
          Sending...
        </div>
      )}

      <div className="input-container">
        <button
          type="submit"
          className="inline-flex items-center my-6 hoverable btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={status === "sending"}
        >
          <span className="px-4">
            {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
          </span>
          <span className="px-4 text-white">
            <FaPaperPlane />
          </span>
        </button>
      </div>

      {/* Success overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] flex items-center justify-center">
        <div className="text-center dark:text-orange text-green">
          <FaSmile className="mx-auto opacity-0 text-8xl greet-text" />
          <h3 className="text-2xl font-bold tracking-wider opacity-0 greet-text">
            Thanks for Contacting!
          </h3>
          <p className="text-sm opacity-0 greet-text dark:text-white text-grayMedium mt-2">
            I'll get back to you soon.
          </p>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
