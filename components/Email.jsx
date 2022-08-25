import React, { useRef } from "react";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let userName = e.target.elements.user_name.value;
    let userEmail = e.target.elements.user_email.value;
    let subject = e.target.elements.subject.value;
    let message = e.target.elements.message.value;

    if (userName == "" || userEmail == "" || subject == "" || message == "") {
      toast.error("Please fill out the form before hitting the send button.");
      return;
    }

    let emailPromise = emailjs.sendForm("service_8kioogl", "template_yhkt7xn", e.target, "0UoJhaPZFQCTcVaza");

    toast.promise(emailPromise, {
      pending: "Sending...",
      success: "Email sent!",
      error: "Error, please try again!",
    });

    emailPromise.then(
      (result) => {
        e.target.reset();
      },
      (error) => {}
    );
  };

  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Name</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="user_name"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="email"
                name="user_email"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
            />
          </div>

          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="10"
              name="message"
            ></textarea>
          </div>
          <input
            className="w-full p-4 bg-[#BB6464] text-gray-100 mt-4"
            type="submit"
            value="Send"
          />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
