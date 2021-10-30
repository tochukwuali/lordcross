import { FaChevronRight } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import AboutBg from "../assets/about.jpg";
import AboutBgMd from "../assets/about-md.webp";
const About = () => {
  return (
    <section className="bg-co-blue">
      <div className="xl:max-w-6xl md:max-w-4xl px-4 mx-auto">
        <div>
          <a href="/" className="mr-2 inline-block text-gray-400">
            Home
          </a>
          <IconContext.Provider
            value={{ className: "text-gray-400 inline-block text-sm" }}
          >
            <FaChevronRight />
          </IconContext.Provider>
          <Link to="/about" className="px-1 inline-block text-gray-200">
            About
          </Link>
        </div>
        <div className="mt-4">
          <img
            src={AboutBg}
            alt=""
            srcSet={`${AboutBg} 640w, ${AboutBgMd} 768w`}
          />
        </div>
        <div className="py-8 text-gray-300">
          <h3 className="text-white text-3xl font-semibold py-6">
            We are passionate about helping you live your dreams
          </h3>
          <p className="leading-7">
          At LordCross we guide you as you make your choice of country,
              university, and your study options. You are never alone, you are
              never confused, LordCross is with you all the way. 
              Everything you need to know about living abroad, obtaining visas, course fees,
              university exchange programs obtaining university grant for small
              projects, work experience, getting a job after study, and working
              towards your settlement scheme.
          </p>{" "}
          <br />
          
          <div className="mt-8">
            <h4 className="text-xl text-white font-semibold">Things we help you with.</h4>
            <ul className="mt-4 text-gray-300">
              
              <div className="flex space-x-4 items-center py-1">
                  <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-3xl text-co-yellow" }}
                >
                  <BsCheck2Square />
                </IconContext.Provider>
                <li>Relocation abroad</li>
              </div>
              <div className="flex space-x-4 items-center py-1">
                  <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-3xl text-co-yellow" }}
                >
                  <BsCheck2Square />
                </IconContext.Provider>
                <li>Get Scholarships</li>
              </div>
            
              <div className="flex space-x-4 items-center py-1">
              <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-3xl text-co-yellow" }}
                >
                  <BsCheck2Square />
                </IconContext.Provider>
                <li>
                  Study abroad
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
