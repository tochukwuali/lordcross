import { FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { Links } from "../components/links";
import { BsLink45Deg } from "react-icons/bs";
import RelocationBg from "../assets/relocation-bg.jpg";
import RelocationBgMd from "../assets/relocation-bg-md.jpg";

const Scholarship = () => {
  return (
    <section className="bg-co-blue">
      <div className="xl:max-w-6xl md:max-w-4xl px-4 mx-auto">
        <div>
          <a href="/#scholarship" className="mr-2 inline-block text-gray-400">
            Home
          </a>
          <IconContext.Provider
            value={{ className: "text-gray-400 inline-block text-sm" }}
          >
            <FaChevronRight />
          </IconContext.Provider>
          <Link to="/scholarship" className="px-1 inline-block text-gray-200">
            Scholarship
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
            All you need to know about getting Scholarships abroad
          </h3>
          <p className="leading-7">
            First up, scholarship opportunities are usually for bright and
            exceptional students that have demonstrated excellence in their
            studies. However, there are many scholarships and bursaries
            available to help fund your studies. Once again, these scholarships,
            funding and bursaries opportunities are very competitive. There are
            various universities that offer subsidized tuition and overseas
            tuition fees vary widely. For instance, most UK universities offer
            subsidized tuition to the tune of £3000 to African students and many
            other benefits that other countries do not currently offer.
            Australia and the United States set very high fees and living cost
            for international students. While studying in China is relatively
            cheap and very affordable, there are factors that could make going
            to China undesirable.{" "}
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
          <p className="leading-7">
            {" "}
            Discuss your funding options with us and explore our list of
            scholarships, bursaries and funding below.
          </p>
          <div className="mt-8">
            <h4 className="text-xl text-white font-semibold">
              Where you can find opportunities
            </h4>
            <ul className="mt-4">
              {Links.map((link, i) => (
                <li key={i} className="flex py-1 space-x-4">
                  <BsLink45Deg />
                  <a href={link.url}> {link.name} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
