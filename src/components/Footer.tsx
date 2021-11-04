import Logo from "../assets/lc_logo.png";
import { BiWorld } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-co-blue py-8 px-4">
      <div className="mx-auto 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-3xl ">
        <div className="md:flex md:flex-col text-left md:justify-center items-center ">
          <div className="md:w-1/5 w-52">
            <img src={Logo} alt="lordcross logo" className="w-3/5" />
          </div>
          <div className="md:text-center md:-ml-20 mt-5">
          <p className="text-gray-400 text-sm font-semibold">info@lordcross.co.uk</p>
        </div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 mt-4 md:-ml-20">
            <Link
              to="/about"
              className="md:uppercase text-gray-400 text-sm  font-semibold hover:text-gray-200"
            >
              About
            </Link>
            <Link
              to="/register"
              className="md:uppercase text-gray-400 text-sm  font-semibold hover:text-gray-200"
            >
              Get Started
            </Link>
            <Link
              to="/#services"
              className="md:uppercase text-gray-400 text-sm  font-semibold hover:text-gray-200"
            >
              Services
            </Link>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 flex flex-col md:justify-items-stretch mt-2">
          <div className="md:flex mt-5 md:items-center space-x-3 hidden">
            <IconContext.Provider
              value={{ className: "text-gray-400 text-base" }}
            >
              <BiWorld />
            </IconContext.Provider>
            <span className="text-gray-400">English</span>
          </div>
          <div className="flex space-x-8 mt-6 md:ml-36 lg:ml-24 xl:ml-32 2xl:ml-40">
            
            <a href="https://instagram.com/lordcross_">
              <IconContext.Provider
                value={{ className: "text-gray-400 text-base hover:text-co-yellow" }}
              >
                <BsInstagram />
              </IconContext.Provider>
            </a>
           
          </div>
          <div className="mt-6 md:justify-self-end">
            <p className="text-gray-400 text-sm">
              &copy; 2021 Lord Cross. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
