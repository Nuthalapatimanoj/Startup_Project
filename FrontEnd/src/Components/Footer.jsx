import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 padding: $spacer !important">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <img
              className=" padding:50px"
              width="150x"
              src="https://startuptn.in/images/blue%20horizontal.png"
              alt=""
            />
            <h4>CONTACT</h4>
            <p className="text-lg mb-8">
              {" "}
              StartupTN Office Space, 10th Floor Chennai Metro Rail Limited
              Building, near Nandanam Metro Station, Chennai, Tamil Nadu-600035
            </p>
          </div>
          <div className="flex-1 w-full">
            <h3 className="text-xl uppercase text-designColor tracking-wider">
              Quick Link
            </h3>
            <ul className="flex flex-coloumn gap-5 font-titleFont font-medium px-6 overflow-hidden">
              <a href="#home" className="hover:text-red-400">
                For Startup
              </a>
              <a href="#about" className="hover:text-red-400">
                For Enablers
              </a>
              <a href="#projects" className="hover:text-red-400">
                Events&Media
              </a>
              <a href="#resume" className="hover:text-red-400">
                Career
              </a>
              <a href="#contact" className="hover:text-red-400">
                Ecosystem
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
