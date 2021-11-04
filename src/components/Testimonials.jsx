import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Testimonials = () => {
  const testimonies = [
    {
      id: 1,
      name: "Peter",
      current: "",
      description:
        "Lord Cross is fantastic travel agent, effectively listening and assistive in all areas, I am 100% satisfied with the level of service and I highly recommend.",
    },
    {
      id: 2,
      name: "Arilewola Timilehin Victoria",
      current: "",
      description:
        "I am completely happy and satisfied with the level of professional customer service I received from Lord Cross. I highly recommend. ",
    },
    {
      id: 3,
      name: "Latifat Omiata",
      current: "",
      description:
        "The tenacity and dedication is top notch. Encouraging and engaging at every point in the way. I will not hesitate to recommend his services repeatedly because he is 100% sure.",
    },
  ];
  return (
    <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-3xl mx-auto mt-16 md:mt-24">
      <div className="text-center">
        <h3 className="font-semibold md:text-4xl leading-tight text-2xl text-co-blue">
          Don't take our word for it{" "}
          <span className="block">hear from our clients</span>
        </h3>
      </div>
      <div className="bg-white md:flex md:space-x-6 mt-16 hidden">
        {testimonies.map(({ name, description, current }, index) => (
          <div
            className="w-1/3 bg-gray-200 rounded-md shadow-xl p-4"
            key={index}
          >
            <p>{description}</p>
            <h3 className="text-co-blue font-semibold mt-4">{name}</h3>
            <small className="mt-2">{current}</small>
          </div>
        ))}
      </div>
      <div className="mt-8 px-4 md:hidden">
      <Slider {...settings} className="">
      {testimonies.map(({ name, description, current }, index) => (
          <div
            className="w-1/3 bg-gray-200 rounded-md shadow-xl p-4"
            key={index}
          >
            <p>{description}</p>
            <h3 className="text-co-blue font-semibold mt-4">{name}</h3>
            <small className="mt-2">{current}</small>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
