import As8s from "../assets/partners/lordcross.png";
import Enop from "../assets/partners/enop.png";
import Md from "../assets/partners/md.png";
import Bellz from "../assets/partners/bellz.png";
import Health from "../assets/partners/health.png";

const Partners = () => {
  return (
    <div className="md:mt-16 relative -mt-28 py-4 md:py-0 w-full">
      <div className="md:mx-auto xl:max-w-6xl md:max-w-4xl w-full flex md:flex-row flex-col items-center md:space-x-8 h-full">
        <h2 className="md:text-lg text-center md:text-left text-gray-300 font-semibold text-sm uppercase">
          Trusted by{" "}
          <span className="md:hidden">
            people and companies all over the world
          </span>
        </h2>
        <div className="text-center ml-10 md:ml-0 w-3/5">
          <ul className="grid grid-cols-2 gap-4 mt-12 md:flex md:items-center md:space-x-24 md:mt-0 h-full md:space-x-8">
            {/* <li className="w-32">
              <a href="https://lordcross.co.uk">
                <img
                  alt="lordcross logo"
                  src={LordCross}
                  className="filter grayscale"
                />
              </a>
            </li> */}
            <li className="w-20">
              <a href="https://enopconcept.com">
                <img alt="enop logo" src={Enop} className="filter grayscale" />
              </a>
            </li>
            <li className="w-16">
              <a href="https://instagram.com/macdemino">
                <img alt="md logo" src={Md} className="filter grayscale" />
              </a>
            </li>
            <li className="w-20 md:w-16">
              <a href="https://instagram.com/mzbellzorganics">
                <img
                  alt="bellz logo"
                  src={Bellz}
                  className="filter grayscale"
                />
              </a>
            </li>
            <li className="w-16 ml-16 md:ml-0">
              <a href="https://facebook.com/pg/healthfitstudio">
                <img
                  alt="Health logo"
                  src={Health}
                  className="filter grayscale"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners;
