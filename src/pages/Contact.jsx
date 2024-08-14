import React from "react";
import Header from "../components/Header";
import { FaMapMarkedAlt, FaEnvelopeOpen, FaMobileAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="p-8 pb-12 md:pb-0">
      <Header header="GET IN" colorText="TOUCH" label="CONTACT" />
      <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="flex-1 text-center md:text-left lg:pl-8">
          <h3 className="font-bold tracking-wider text-h3 dark:text-white text-grayMedium">
            LET's DISCUSS YOUR PROJECT.
          </h3>
          <h5 className="pr-8 my-4 dark:text-white text-grayMedium">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </h5>
          <span className="flex items-center justify-center text-left md:block">
            <span>
              <div className="flex gap-8 my-8">
                <span className="text-5xl dark:text-orange text-green">
                  <FaMapMarkedAlt />
                </span>
                <span>
                  <h3 className="dark:text-white/70 text-grayMedium/70">
                    ADDRESS POINT
                  </h3>
                  <h3 className="dark:text-white text-grayMedium">
                    Pratapgarh, Uttar Pradesh India
                  </h3>
                </span>
              </div>
              <div className="flex gap-8 my-8">
                <span className="text-5xl dark:text-orange text-green">
                  <FaEnvelopeOpen />
                </span>
                <span>
                  <h3 className="dark:text-white/70 text-grayMedium/70">
                    MAIL ME
                  </h3>
                  <h3 className="dark:text-white text-grayMedium">
                    pradeepyadav8253@gmail.com
                  </h3>
                </span>
              </div>
              <div className="flex gap-8 my-8">
                <span className="text-5xl dark:text-orange text-green">
                  <FaMobileAlt />
                </span>
                <span>
                  <h3 className="dark:text-white/70 text-grayMedium/70">
                    CALL ME
                  </h3>
                  <h3 className="dark:text-white text-grayMedium">
                    +91 8417876362
                  </h3>
                </span>
              </div>
            </span>
          </span>
        </div>
        <div className="relative flex-1 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
