import Logo from "../assets/lc_logo.png";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-co-blue py-6">
      <div className="mx-auto max-w-6xl ">
        <div className="flex flex-col justify-center items-center ">
          <div className="w-1/5">
            <img src={Logo} alt="lordcross logo" className="w-3/5" />
          </div>
          <div className="flex space-x-8 mt-8 -ml-20">
            <Link
              to="/about"
              className="uppercase text-gray-400 text-sm  font-semibold hover:text-gray-200"
            >
              About
            </Link>
            <Link
              to="/register"
              className="uppercase text-gray-400 text-sm  font-semibold hover:text-gray-200"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="uppercase text-gray-400 text-sm  font-semibold hover:text-gray-200"
            >
              Services
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-items-stretch mt-3">
          <div className="flex mt-5 items-center space-x-3">
            <IconContext.Provider
              value={{ className: "text-gray-400 text-base" }}
            >
              <BiWorld />
            </IconContext.Provider>
            <span className="text-gray-400">English</span>
          </div>
          <div className="flex space-x-8 mt-6 ml-24">
            <IconContext.Provider
              value={{ className: "text-gray-400 text-base" }}
            >
              <FaLinkedin />
            </IconContext.Provider>
            <a href="https://instagram.com/lordcross_">
              <IconContext.Provider
                value={{ className: "text-gray-400 text-base hover:text-co-yellow" }}
              >
                <BsInstagram />
              </IconContext.Provider>
            </a>
            <a href="https://facebook.com/lordcrossconsults">
            <IconContext.Provider
              value={{ className: "text-gray-400 text-base hover:text-co-yellow" }}
            >
              <FaFacebookSquare />
            </IconContext.Provider>
            </a>
          </div>
          <div className="mt-6 justify-self-end">
            <p className="text-gray-400 text-sm">
              &copy; 2021 Lord Cross Consults. All rights reserved.
            </p>
          </div>
        </div>
        <div className="text-center -ml-20 mt-5">
          <p className="text-gray-400 text-sm font-semibold">info@lordcross.co.uk</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
