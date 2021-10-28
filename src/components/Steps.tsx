import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <section className="py-12 px-4 md:py-18 relative bg-co-blue">
      <div className="xl:max-w-6xl md:max-w-4xl mx-auto md:h-52 p-4 flex flex-col md:flex-row md:items-center md:space-x-24">
        <div className="text-center">
          <h3 className="font-bold w-full md:text-3xl text-3xl md:text-gray-200 text-gray-300">
            Get started in 5 minutes
          </h3>
        </div>
        <div>
          <div className="md:space-y-12 space-y-4 mt-6 md:mt-0">
            <div className="md:text-center px-4 flex md:space-x-4 space-x-8 items-center">
              <span className="inline-block font-bold md:text-4xl text-3xl text-gray-200 opacity-40">
                01
              </span>
              <p className="text-gray-200 font-medium md:uppercase">
                Click on "Get Started"
              </p>
            </div>
            <div className="md:text-center px-4 flex md:space-x-4 space-x-8 items-center">
              <span className="inline-block font-bold md:text-4xl text-3xl text-gray-200 opacity-40">
                02
              </span>
              <p className="text-gray-200 font-medium ">
                Enter the information required on the form and submit
              </p>
            </div>
            <div className="md:text-center px-4 flex md:space-x-4 space-x-8 items-center">
              <span className="inline-block font-bold md:text-4xl text-3xl text-gray-200 opacity-40">
                03
              </span>
              <p className="text-gray-200 font-medium">
                Expect an email from us shortly
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:max-w-6xl md:max-w-4xl md:-mt-28 text-center mx-8 md:mx-auto md:text-left md:p-4 ">
        <Link
          to="/register"
          className="bg-green-700 rounded-sm text-white py-3 px-6 mt-12 inline-block w-full"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Steps;
