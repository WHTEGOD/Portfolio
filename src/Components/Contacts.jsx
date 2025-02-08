import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contacts = ({ isDarkMode }) => {
    const contact = {
        address: "Dehradun, Uttarakhand",
        phoneNo: "+91 7014167303",
        email: "tpulkit87@gmail.com",
    };

    return (
        <div 
            id="contact" 
            className={`py-20 text-center border-t transition-all duration-500 ${
                isDarkMode ? "border-stone-900 text-white" : "border-gray-300 text-black"
            }`}
        >
            <h1 className="text-5xl font-extrabold">Get in Touch</h1>
            

            <div className="text-center tracking-tighter mt-6">
                <p className="my-2">{contact.address}</p>
                <p className="my-2">{contact.phoneNo}</p>
                <a
                    href={`mailto:${contact.email}`}
                    className={`border-b transition-all ${isDarkMode ? "border-white hover:text-gray-300" : "border-black hover:text-gray-700"}`}
                >
                    {contact.email}
                </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-3xl">
                <a
                    href="https://www.linkedin.com/in/pulkit-tiwari-30107a2b6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={`transition-all hover:scale-110 ${isDarkMode ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"}`}
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/WHTEGOD"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className={`transition-all hover:scale-110 ${isDarkMode ? "text-white hover:text-gray-400" : "text-black hover:text-gray-800"}`}
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default Contacts;
