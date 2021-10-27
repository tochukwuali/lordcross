import HeroImage from "../assets/hero2-img.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="md:py-52 py-16 h-screen bg-co-blue">
      <div className="xl:max-w-6xl mx-auto md:max-w-xl p-4 md:flex md:space-x-8">
        <div className="text-center md:text-left">
          <h1 className="font-extrabold md:text-6xl text-4xl text-white leading-tight">
            Relocate & Study <br />{" "}
            <span className="text-co-yellow">Without Stress</span>
          </h1>
          <p className="text-gray-200 md:w-3/4 md:mt-6 mt-10 leading-relaxed">
            For every step on your journey, from advice on immigration to
            tutoring to applications, career support and more, we're here to
            help. We're your one stop shop for overseas relocation and study!
          </p>
          <div className="mt-16 mx-8 md:mx-0 md:mt-12">
            <Link
              to="/register"
              className="py-3 px-6 text-white inline-block border bg-co-yellow w-full md:w-1/4 border-co-yellow font-semibold text-base rounded-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="md:w-full md:block md:-mt-12 hidden">
          <img src={HeroImage} alt="" className="w-full rounded-md" />
        </div>
        
      </div>
      {/* <Partners /> */}
    </div>
  );
};

export default Hero;
