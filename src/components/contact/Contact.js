import React, { useState } from "react";
import emailjs from "emailjs-com";
import ContactLeft from "./ContactLeft";
import Title from "../layouts/Title";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!username) {
      setErrMsg("Username is required!");
    } else if (!phoneNumber) {
      setErrMsg("Phone number is required!");
    } else if (!email) {
      setErrMsg("Please provide your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please enter a valid Email!");
    } else if (!subject) {
      setErrMsg("Please provide your Subject!");
    } else if (!message) {
      setErrMsg("Message is required!");
    } else {
      // Send email using EmailJS
      emailjs
        .send(
          "service_nm116",
          "template_uxl16w9",
          {
            from_name: username,
            phone_number: phoneNumber,
            email: email,
            subject: subject,
            message: message,
          },
          "rXiWN5SyYVLnXbEPJ"
        )
        .then(
          (response) => {
            setSuccessMsg(
              `Thank you, ${username}. Your message has been sent!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            console.log(error); // Log the error for debugging
            setErrMsg("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Here" />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <ContactLeft />
        <div className="w-full lg:w-[60%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-8 rounded-lg shadow-shadowOne">
          <form className="flex flex-col gap-6">
            {errMsg && (
              <p className="bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 tracking-wide animate-bounce">
                {errMsg}
              </p>
            )}
            {successMsg && (
              <p className="bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 tracking-wide animate-bounce">
                {successMsg}
              </p>
            )}
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-400 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`contactInput ${
                    errMsg === "Username is required!"
                      ? "outline-designColor"
                      : ""
                  }`}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-400 uppercase">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`contactInput ${
                    errMsg === "Phone number is required!"
                      ? "outline-designColor"
                      : ""
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-sm text-gray-400 uppercase">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`contactInput ${
                  errMsg === "Please provide your Email!"
                    ? "outline-designColor"
                    : ""
                }`}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-sm text-gray-400 uppercase">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`contactInput ${
                  errMsg === "Please provide your Subject!"
                    ? "outline-designColor"
                    : ""
                }`}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-sm text-gray-400 uppercase">Message</label>
              <textarea
                rows="8"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`contactTextArea ${
                  errMsg === "Message is required!" ? "outline-designColor" : ""
                }`}
              />
            </div>
            <button
              onClick={handleSend}
              className="w-full h-12 bg-[#141518] rounded-lg text-gray-400 uppercase tracking-wider hover:text-white duration-300 hover:border hover:border-designColor">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
