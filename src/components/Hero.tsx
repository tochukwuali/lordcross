import Partners from "../components/Partners";
import HeroImage from "../assets/hero2-img.png";

const Hero = () => {
  return (
    <div className=" py-20 h-screen bg-co-blue">
      <div className="max-w-6xl mx-auto flex space-x-8">
        <div>
          <h1 className="font-extrabold text-6xl text-white leading-tight">
            Relocate & Study <br />{" "}
            <span className="text-co-yellow">Without Stress</span>
          </h1>
          <p className="text-gray-200 w-3/4 mt-6 leading-relaxed">
            For every step on your journey, from advice on immigration to
            tutoring to applications, career support and more, we're here to
            help. We're your one stop shop for overseas relocation and study!
          </p>
          <div className="mt-12">
            <a
              href="/"
              className="py-3 px-6 text-white border border-co-yellow font-semibold text-base rounded-sm"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="w-full -mt-12">
          <img src={HeroImage} alt="" className="w-full rounded-md" />
        </div>
        
      </div>
      {/* <Partners /> */}
    </div>
  );
};

export default Hero;
