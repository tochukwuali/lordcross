import { FaChevronRight } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import RelocationBg from "../assets/relocation-bg.webp";
import RelocationBgMd from "../assets/relocation-bg-md.webp";

const Relocation = () => {
  return (
    <section className="bg-co-blue">
      <div className="xl:max-w-6xl md:max-w-4xl px-4 mx-auto">
        <div>
          <a href="/#relocation" className="mr-2 inline-block text-gray-400">
            Home
          </a>
          <IconContext.Provider
            value={{ className: "text-gray-400 inline-block text-sm" }}
          >
            <FaChevronRight />
          </IconContext.Provider>
          <Link to="/relocation" className="px-1 inline-block text-gray-200">
            Relocation
          </Link>
        </div>
        <div className="mt-4">
          <img
            src={RelocationBg}
            alt=""
            srcSet={`${RelocationBg} 640w, ${RelocationBgMd} 768w`}
          />
        </div>
        <div className="py-8 text-gray-300">
          <h3 className="text-white text-3xl font-semibold py-6">
            All you need to know about Relocation
          </h3>
          <p className="leading-7">
            So many of you are nursing the dream of moving abroad and
            relocating. You want to move to a new country and seek a better life
            out there. While there are various ways people embark on this
            journey, <span className="bg-co-yellow text-co-blue font-medium">the only two best ways we recommend is get a job in the
            country of your choice before leaving your home country or make this
            happen through study abroad.</span>{" "}
          </p>{" "}
          <br />
          <p className="leading-7">
            {" "}
            Relocation by tourists visas or visiting visa does not give the
            freedom and advantage a work or study visa gives. With study visa
            you can work full time and if you have a family, they can come with
            you as well and enjoy all the benefits that are available in the
            country. There are life changing benefits to relocating and living
            abroad. You need to stop dreaming, plunge in now and broaden your
            horizons. You have only heard of London, Edinburgh, Glasgow, Paris,
            New York, Berlin, Santa Fe, Dublin, etc. You need to see these
            cities; you need to experience everything about them.
          </p>
          <div className="mt-8">
            <h4 className="text-xl text-white font-semibold">Some benefits of relocating abroad.</h4>
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
              <div className="flex space-x-4 items-center py-1">
                  <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BsCheck2Square />
                </IconContext.Provider>
                <li>You gain a global perspective when abroad</li>
              </div>
              <div className="flex space-x-4 items-center py-1">
                  <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BsCheck2Square />
                </IconContext.Provider>
                <li>
                  You experience new cultures, food and and languages abroad
                </li>
              </div>
              <div className="flex space-x-4 items-center py-1">
                  <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
                >
                  <BsCheck2Square />
                </IconContext.Provider>
                <li>
                  You expand your opportunities and global connections abroad
                </li>
              </div>
              <div className="flex space-x-4 items-center py-1">
              <IconContext.Provider
                  value={{ className: "text-gray-400 inline-block text-sm" }}
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
    </section>
  );
};

export default Relocation;
