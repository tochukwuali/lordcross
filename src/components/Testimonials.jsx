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
      name: "Alegu Joshua",
      current: "Phd Research @ Edinburgh Napier University",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ea doloremque ipsa eius aliquam minus maiores cumque adipisci delectus unde?",
    },
    {
      id: 2,
      name: "Kingsley Iroakazi",
      current: "Msc Student @ University of Oxford",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ea doloremque ipsa eius aliquam minus maiores cumque adipisci delectus unde?",
    },
    {
      id: 3,
      name: "Adedapo Adebanjo",
      current: "Rhodes Scholar @ University of Oxford",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ea doloremque ipsa eius aliquam minus maiores cumque adipisci delectus unde?",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto mt-16 md:mt-24">
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
      <div className="mt-8 px-4">
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
