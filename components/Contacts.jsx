import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import ContactForm from "./Email";

const Contacts = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#BB6464]">
          Contacts
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1602016736566-7ed6a58894bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="/"
                  height="300em"
                  width="450em"
                />
              </div>
              <div>
                <h2 className="py-2">Audrey</h2>
                <p>Junior Front-End Developer</p>
                <p className="py-4">
                  I am available for full-time positions. Contact me and
                  let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#BB6464]">Connect With Me</p>
                <div className="flex items-center justify-around py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#BB6464] ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/audreyfocant/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#BB6464] ease-in duration-300">
                    <a
                      href="https://github.com/Faudrey28 "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
