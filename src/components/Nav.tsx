import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/lc_logo.png";
import MobileIcon from "./MobileIcon";

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  const [toggle, setToggle] = useState(false);
  let attachedClasses = ["Nav"];
  const openNav = () => setToggle(!toggle);
  if (toggle) {
    attachedClasses = ["Nav", "menuOpen"];
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 650);
    });
  }, []);

  return (
    <div className="w-full bg-co-blue">
      <nav
        className={`xl:px-24 mx-auto md:flex md:justify-between py-8 hidden fixed top-0 z-30 h-20 ${
          scroll ? "bg-white border-b shadow-xl " : "bg-co-blue"
        }`}
      >
        <Link to="/" className="w-1/4">
          <img src={Logo} alt="lordcross logo" className="w-9/12" />
        </Link>
        <div className="mt-3 flex justify-between w-full">
          <ul className="flex space-x-8">
            <li className="text-gray-300 font-bold uppercase check">
              <Link to="/about" className="text-xs">
                About
              </Link>
            </li>
            <li className="text-gray-300 font-bold uppercase check">
              <a href="/#services" className="text-xs">
                Services
              </a>
            </li>
            <li className="text-gray-300 font-bold uppercase check">
              <a href="/#contact" className="text-xs">
                Contact Us
              </a>
            </li>
            <li className="text-gray-300 font-bold uppercase check">
              <a href="/" className="text-xs">
                FAQs
              </a>
            </li>
          </ul>
          <div>
            <Link
              to="/register"
              className="text-gray-300 font-bold uppercase text-xs"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden flex justify-between bg-nav-grey w-full px-4 py-6 `}
      >
        <div className="relative">
          <img src={Logo} alt="lord cross logo" className="w-2/5" />
        </div>
        <div className="relative">
          <MobileIcon toggle={toggle} openNav={openNav} />
        </div>
        <div className={attachedClasses.join(" ")}>
          <div className="side__nav_logo">
            <img src={Logo} alt="as8s logo" className="w-20" />
          </div>
          <ul className="nav__list">
            <li className="mt-6 uppercase text-gray-500 " onClick={openNav}>
              <Link to="/">Home</Link>
            </li>

            <li className="mt-6 uppercase text-gray-500" onClick={openNav}>
              <a href="#features">About</a>
            </li>

            <li className="mt-6 uppercase text-gray-500">
              <a href="#mission">Services</a>
            </li>

            <li className="mt-6 uppercase text-gray-500">
              <a href="#footer">Contact us</a>
            </li>
            <li className="mt-6 uppercase text-gray-500">
              <a href="#footer">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
