import HeroImage from "../assets/hero2-img.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="md:py-32 lg:py-16 2xl:py-36 py-16 h-screen bg-co-blue">
      <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl mx-auto md:max-w-3xl md:flex md:space-x-8">
        <div className="text-center md:text-left md:w-2/4">
          <h1 className="font-extrabold md:text-4xl xl:text-6xl text-4xl text-white leading-tight">
            Relocate & Study <br />{" "}
            <span className="text-co-yellow">Without Stress</span>
          </h1>
          <p className="text-gray-200 md:w-4/5 md:mt-6 mt-10 leading-relaxed">
            For every step on your journey, from advice on immigration to
            tutoring to applications, career support and more, we're here to
            help. We're your one stop shop for overseas relocation and study!
          </p>
          <div className="mt-16 mx-8 md:mx-0 md:mt-12 md:w-full">
            <Link
              to="/register"
              className="py-3 px-6 text-white inline-block border bg-co-yellow w-full md:w-2/4 border-co-yellow font-semibold text-base rounded-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="md:w-2/4 md:block md:-mt-12 hidden">
          <img src={HeroImage} alt="" className="w-full rounded-md" />
        </div>
        
      </div>
      {/* <Partners /> */}
    </div>
  );
};

export default Hero;
