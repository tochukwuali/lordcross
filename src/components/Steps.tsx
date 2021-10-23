import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <section className="py-32 px-4 md:py-18 relative bg-co-blue">
      <div className="max-w-6xl mx-auto h-52 p-4 flex items-center space-x-24">
        <div className="">
          <h3 className="font-bold md:text-3xl text-3xl text-gray-200">
            Get started in 5 minutes
          </h3>
          <Link to="/register" className="bg-green-700 rounded-sm text-white py-3 px-6 mt-12 inline-block">Get Started</Link>
        </div>
        <div>
          <div className=" space-y-12">
            <div className="text-center px-4 flex space-x-4 items-center">
              <span className="inline-block font-bold text-5xl text-gray-200 opacity-40">01</span>
              <p className="text-gray-200 font-medium  uppercase ">Click on "Get Started"</p>
            </div>
            <div className="text-center px-4 flex space-x-4 items-center">
              <span className="inline-block font-bold text-5xl text-gray-200 opacity-40">02</span>
              <p className="text-gray-200 font-medium  uppercase">Enter the information required on the form and submit</p>
            </div>
            <div className="text-center px-4 flex space-x-4 items-center">
              <span className="inline-block font-bold text-5xl text-gray-200 opacity-40">03</span>
              <p className="text-gray-200 font-medium  uppercase ">Expect an email from us shortly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
