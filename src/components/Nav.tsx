import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/lc_logo.png";
import MobileIcon from "./MobileIcon";

const Nav = () => {
  // const [scroll, setScroll] = useState(false);

  const [toggle, setToggle] = useState(false);
  let attachedClasses = ["Nav"];
  const openNav = () => setToggle(!toggle);
  if (toggle) {
    attachedClasses = ["Nav", "menuOpen"];
  }

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 650);
  //   });
  // }, []);

  return (
    <div className="w-full bg-co-blue">
      <nav
        className={`xl:px-24 mx-auto md:flex md:justify-between py-6 hidden `}
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
              <a href="/#enquiry" className="text-xs">
                Contact Us
              </a>
            </li>
            
            <li className="text-gray-300 font-bold uppercase check">
              <Link to="/register" className="text-xs">
                Register
              </Link>
            </li>
          </ul>
          {/* <div>
            <Link
              to="/register"
              className="text-white bg-co-yellow p-4 rounded-sm font-bold uppercase text-xs"
            >
              Register
            </Link>
          </div> */}
        </div>
      </nav>

      <div
        className={`md:hidden flex justify-between bg-nav-grey w-full px-4 py-6 `}
      >
        <Link to="/" className="relative">
          <img src={Logo} alt="lord cross logo" className="w-2/5" />
        </Link>
        <div className="relative">
          <MobileIcon toggle={toggle} openNav={openNav} />
        </div>
        <div className={attachedClasses.join(" ")}>
          <Link to="/" className="side__nav_logo mt-2">
            <img src={Logo} alt="lordcross logo" className="w-28" />
          </Link>
          <ul className="nav__list">
            <li className="mt-6 uppercase text-gray-300 " onClick={openNav}>
              <Link to="/">Home</Link>
            </li>

            <li className="mt-6 uppercase text-gray-300" onClick={openNav}>
              <Link to="/about">About</Link>
            </li>

            <li className="mt-6 uppercase text-gray-300">
              <a href="#services">Services</a>
            </li>

            <li className="mt-6 uppercase text-gray-300">
              <a href="#enquiry">Contact us</a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
