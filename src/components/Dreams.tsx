import DreamImage from "../assets/red-man-640.jpg";

const Dreams = () => {
  return (
    <section className="py-16 px-4 md:py-24 relative bg-dreams">
      <div className="max-w-6xl mx-auto">
        <div className="flex space-x-10">
          <div className="w-2/4">
            <img src={DreamImage} alt="studying abroad" className="w-full rounded-md shadow-2xl" />
          </div>
          <div className="w-2/4 mt-20 text-center">
            <div className="text-center">
              <h3 className="font-bold md:text-3xl text-2xl text-blue-900">
                We point you in the <span className="text-co-yellow">right direction</span>
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-gray-600">
              At LordCross we guide you as you make your choice of country,
              university, and your study options. You are never alone, you are
              never confused, LordCross is with you all the way. Everything you
              need to know about living abroad, obtaining visas, course fees,
              university exchange programs obtaining university grant for small
              projects, work experience, getting a job after study, and working
              towards your settlement scheme.
            </p>
            {/* <h4> <Link to="/files/restapi.pdf" target="_blank" download> Read More </Link>  </h4> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dreams;
