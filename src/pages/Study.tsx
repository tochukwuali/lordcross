import { FaChevronRight } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { BiCheckbox } from "react-icons/bi";
import { FiCheckSquare } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import RelocationBg from "../assets/relocation-bg.jpg";
import RelocationBgMd from "../assets/relocation-bg-md.jpg";

const Study = () => {
  return (
    <section className="bg-co-blue">
      <div className="xl:max-w-6xl md:max-w-4xl px-4 mx-auto">
        <div>
          <a href="/#study" className="mr-2 inline-block text-gray-400">
            Home
          </a>
          <IconContext.Provider
            value={{ className: "text-gray-400 inline-block text-sm" }}
          >
            <FaChevronRight />
          </IconContext.Provider>
          <Link to="/study" className="px-1 inline-block text-gray-200">
            Study
          </Link>
        </div>
        <div className="mt-4">
          <img
            src={RelocationBg}
            alt=""
            srcSet={`${RelocationBg} 640w, ${RelocationBgMd} 768w`}
          />
        </div>
        <div className="py-8 text-gray-200">
          <h3 className="text-white md:text-3xl text-2xl font-semibold py-6">
            All you need to know about Studying abroad
          </h3>
          <p className="leading-7">
            The benefit of studying abroad is massive and you would never know
            until you embark on the journey to explore what is obtainable on the
            other side of the divide. The grass is always greener on the other
            side -this is true of study abroad.{" "}
          </p>{" "}
          <br />
          <p className="leading-7">
            {" "}
            Therefore, to secure your place in your chosen university and
            course, you must demonstrate that you have enough money to meet the
            living costs and to fund your studies. Again, this requirement
            varies by country.
          </p>{" "}
          <br />
          <div className="mt-8">
            <h4 className="text-xl text-white font-semibold">
              The benefits of studying abroad
            </h4>
            <ul className="mt-4 text-gray-300">
              <div className="flex space-x-4 items-center py-1">
                <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BiCheckbox />
                </IconContext.Provider>
                <li>Experience a different culture</li>
              </div>
              <div className="flex space-x-4 items-center py-1">
                <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BiCheckbox />
                </IconContext.Provider>
                <li>Make new friends and colleagues</li>
              </div>
              <div className="flex space-x-4 items-center py-1">
                <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BiCheckbox />
                </IconContext.Provider>
                <li>Learn a new language.</li>
              </div>
              <div className="flex space-x-4 items-center py-1">
                <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BiCheckbox />
                </IconContext.Provider>
                <li>Gain transferable skills.</li>
              </div>
              <div className="flex space-x-4 items-center py-1">
                <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BiCheckbox />
                </IconContext.Provider>
                <li>Enhance your personal development goals.</li>
              </div>
              <div className="flex space-x-4 items-center py-1">
                <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BiCheckbox />
                </IconContext.Provider>
                <li>Gain new global perspectives.</li>
              </div>
              <div className="flex space-x-4 items-center py-1">
                <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BiCheckbox />
                </IconContext.Provider>
                <li>Boost your employability.</li>
              </div>
              <div className="flex space-x-4 items-center py-1">
                <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BiCheckbox />
                </IconContext.Provider>
                <li>Get ready to change the world.</li>
              </div>
              <div className="flex space-x-4 items-center py-1">
                <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BiCheckbox />
                </IconContext.Provider>
                <li>Everything is now yours. Take it.</li>
              </div>
            </ul>
          </div>
          <div className="mt-8">
            <p className="leading-7">
              {" "}
              Now that you are ready to take on the world, let us look at a few
              Study Abroad Checklist. Your world is about to change hence every
              planning and decisions made must be meticulous and well planned.
            </p>{" "}
            <div className="mt-8">
              <h4 className="text-xl text-white font-semibold inline">
                Here are a few important checklists
              </h4>
              <IconContext.Provider
                value={{ className: "inline ml-4 text-xl font-semibold" }}
              >
                <FiCheckSquare />
              </IconContext.Provider>
              <ul className="mt-4 text-gray-300">
                <div className="flex space-x-4 items-center py-1">
                  <IconContext.Provider
                    value={{ className: "text-gray-400 inline-block text-sm" }}
                  >
                    <BsCheck2Square />
                  </IconContext.Provider>
                  <li>The air is fresher abroad</li>
                </div>
                <div className="flex space-x-4 items-center py-1">
                  <IconContext.Provider
                    value={{ className: "text-gray-400 inline-block text-sm" }}
                  >
                    <BsCheck2Square />
                  </IconContext.Provider>
                  <li>The grass is greener abroad</li>
                </div>
                <div className="flex space-x-4 items-center py-1">
                  <IconContext.Provider
                    value={{ className: "text-gray-400 inline-block text-sm" }}
                  >
                    <BsCheck2Square />
                  </IconContext.Provider>
                  <li>Money has more value abroad</li>
                </div>
                <div className="flex space-x-4 items-center py-1">
                  <IconContext.Provider
                    value={{ className: "text-gray-400 inline-block text-sm" }}
                  >
                    <BsCheck2Square />
                  </IconContext.Provider>
                  <li>Social benefits are available abroad</li>
                </div>
                <div className="flex space-x-4  py-1">
                  <IconContext.Provider
                    value={{ className: "text-gray-400 inline-block text-sm" }}
                  >
                    <BsCheck2Square />
                  </IconContext.Provider>
                  <li>You gain a global perspective when abroad</li>
                </div>
                <div className="flex space-x-4 py-1">
                  <IconContext.Provider
                    value={{
                      className:
                        "text-gray-400 inline-block text-xl sm:text-sm",
                    }}
                  >
                    <BsCheck2Square />
                  </IconContext.Provider>
                  <li>
                    You experience new cultures, food and and languages abroad
                  </li>
                </div>
                <div className="flex space-x-4 py-1">
                  <IconContext.Provider
                    value={{
                      className:
                        "text-gray-400 inline-block text-xl sm:text-sm",
                    }}
                  >
                    <BsCheck2Square />
                  </IconContext.Provider>
                  <li>
                    You expand your opportunities and global connections abroad
                  </li>
                </div>
                <div className="flex space-x-4 py-1">
                  <IconContext.Provider
                    value={{
                      className:
                        "text-gray-400 inline-block text-2xl sm:text-sm",
                    }}
                  >
                    <BsCheck2Square />
                  </IconContext.Provider>
                  <li>
                    You secure brighter futures for yourself and your generation
                    abroad
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
