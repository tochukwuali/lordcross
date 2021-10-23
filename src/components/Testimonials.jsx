import Slider from "../components/Slider";

const Testimonials = () => {
  const testimonies = [
    {
      id: 1,
      name: "Alegu Joshua",
      current: "Phd Research @ Edinburgh Napier",
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
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h3 className="font-semibold md:text-2xl text-2xl text-co-blue">
          Don't take our word for it{" "}
          <span className="block">hear from our clients</span>
        </h3>
      </div>
      <div className="bg-white flex space-x-6 mt-8">
        {testimonies.map((testimony, index) => (
          <div
            className="w-1/3 bg-gray-200 rounded-md shadow-xl p-4"
            key={index}
          >
            <p>{testimony.description}</p>
            <h3 className="text-co-blue font-semibold mt-4">{testimony.name}</h3>
            <small className="mt-2">{testimony.current}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
