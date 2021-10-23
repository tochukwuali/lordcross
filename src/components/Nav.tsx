import { Link } from 'react-router-dom'
import Logo from '../assets/lc_logo1.png'

const Nav = () => {
    return (
        <nav className="py-8 bg-co-blue">
          <div className="max-w-6xl mx-auto flex space-x-10 items-center">
          <div className="w-1/4">
            <img src={Logo} alt="lordcross logo" className="w-7/12" />
          </div>  
          <div className="mt-3 flex justify-between w-full">
            <ul className="flex space-x-8">
               <li className="text-gray-300 font-bold uppercase check"><a href="/" className="text-xs">About</a></li>
               <li className="text-gray-300 font-bold uppercase check"><a href="/" className="text-xs">Services</a></li>
               <li className="text-gray-300 font-bold uppercase check"><a href="/" className="text-xs">Contact Us</a></li>
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
    )
}

export default Nav
