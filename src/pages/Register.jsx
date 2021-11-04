import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [programme, setProgramme] = useState("");
  const [comment, setComment] = useState("");

  const TEMPLATE_ID = "template_gim67f9"
  const SERVICE_ID = "lordcross_application"
  const USER_ID = "user_HFzplbWYZnDvabh3ppQkd"

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (navigator.onLine) {
     
        emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          e.target,
          USER_ID
        )
        .then((result) =>
          console.log(result)
        )
        .catch((error) => console.log(error));
      setCountry("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setProgramme("");
      setComment("");
    } else {
      console.log('trying')
    }
    
  };

  return (
    <section className="bg-gray-50">
      <div>
        <section className="py-4">
          <div className="w-full lg:w-8/12 px-4 mx-auto mt-3">
          <div className="px-2 mb-3">
          <a href="/" className="mr-2 inline-block text-gray-400">
            Home
          </a>
          <IconContext.Provider
            value={{ className: "text-gray-400 inline-block text-sm" }}
          >
            <FaChevronRight />
          </IconContext.Provider>
          <Link to="/register" className="px-1 inline-block text-gray-900">
            Register
          </Link>
        </div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-lg bg-blueGray-100 border-0">
            
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit}>
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    User Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={firstName}
                          name="firstName"
                          placeholder="Enter First Name"
                          onChange={e => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={lastName}
                          name="lastName"
                          placeholder="Enter Last Name"
                          onChange={e => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={email}
                          name="email"
                          placeholder="Email"
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={phone}
                          name="phone"
                          placeholder="Phone Number"
                          onChange={e => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Contact Information
                  </h6>
                  <div className="flex flex-wrap">
                    
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Country
                        </label>
                        <CountryDropdown
                          name="country"
                          id="country"
                          value={country}
                          onChange={(val) => setCountry(val)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Application Options
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <div>
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="programme"
                        >
                          Degree Program
                        </label>
                          <select
                            name="programme"
                            value={programme}
                            id="programme"
                            onChange={(e) => setProgramme(e.target.value)}
                            required
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          >
                            <option value="Select an option">
                              Select an option
                            </option>
                            <option value="Undergradute">Undergradute</option>
                            <option value="Masters">Masters</option>
                            <option value="PhD">PhD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Comment
                        </label>
                        <textarea
                          value={comment}
                          name="comment"
                          onChange={e => setComment(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        ></textarea>
                      </div>
                    </div>
                   <div className="px-4 mb-3">
                   <button className="bg-co-blue text-white py-3 px-6 font-semibold hover:bg-blue-900 hover:text-gray-100">Submit</button>
                   </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Register;
