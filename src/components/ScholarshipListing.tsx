import ENU from "../assets/partners/enu.png";
import Bristol from "../assets/partners/bristol.png";
import Bmg from "../assets/partners/birmingham.png";
import Essex from "../assets/partners/essex.jpg";
import Aston from "../assets/partners/aston.png";
import Cam from "../assets/partners/cam.png";
import Reading from "../assets/partners/reading.png";
import Lancaster from "../assets/partners/lancaster.png";
import { Link } from "react-router-dom";

const logos = [ENU, Bristol, Bmg, Essex, Aston, Cam, Reading, Lancaster];

const Steps = () => {
  return (
    <section className="py-12 px-4 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-10">
        <div className="text-center md:w-1/2">
          <h3 className="font-bold md:text-3xl text-2xl text-blue-900">
            We know where you can find
            <span className="text-co-yellow"> scholarship opportunities</span>
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-8 md:mt-0 md:w-1/2">
          {logos.map((logo, i) => (
            <div key={i}>
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 md:mt-0 px-4 md:px-0 xl:max-w-6xl mx-auto md:ml-60 md:max-w-4xl text-center md:text-left ">
        <Link
          to="/scholarship"
          className="bg-co-yellow p-4 rounded-sm text-white inline-block font-medium w-full md:w-1/6"
        >
          See Opportunities
        </Link>
      </div>
    </section>
  );
};

export default Steps;
