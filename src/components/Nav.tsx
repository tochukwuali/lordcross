import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/lc_logo.png'
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
      setScroll(window.scrollY > 50);
    });
  }, []);

    return (
      <>
        <nav className="py-8 bg-co-blue">
          <div className="xl:max-w-6xl mx-auto md:px-24 md:flex md:space-x-10 items-center hidden fixed h-20 top-0 z-30">
          <Link to="/" className="w-1/4">
            <img src={Logo} alt="lordcross logo" className="w-7/12" />
          </Link>  
          <div className="mt-3 flex justify-between w-full">
            <ul className="flex space-x-8">
               <li className="text-gray-300 font-bold uppercase check"><Link to="/about" className="text-xs">About</Link></li>
               <li className="text-gray-300 font-bold uppercase check"><a href="/#services" className="text-xs">Services</a></li>
               <li className="text-gray-300 font-bold uppercase check"><a href="/#contact" className="text-xs">Contact Us</a></li>
               <li className="text-gray-300 font-bold uppercase check"><a href="/" className="text-xs">FAQs</a></li>
            </ul>
            <div>
              <Link to="/register" className="text-gray-300 font-bold uppercase text-xs">
                 Get Started
              </Link>
            </div>
          </div>
          </div>
        </nav>
        <div
        className={`md:hidden flex justify-between bg-nav-grey w-full px-4 py-6 `}
      >
        <div className="relative">
          <img src={Logo} alt="lord cross logo" className="w-20" />
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
              <a href="https://as8s.com">Home</a>
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
        </>
    )
}

export default Nav
