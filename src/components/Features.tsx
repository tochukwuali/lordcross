import { IconBuildingCommunity, IconAtom, IconSchool } from "@tabler/icons";
import { Link } from 'react-router-dom'

const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: <IconBuildingCommunity size={36} color="#ffffff" stroke={1} />,
      topic: "Relocation",
      aos: "fade-right",
      bgCol: "bg-blue-500",
      link: "/relocation",
      paragraph:
        "With study visa you can work full time and if you have a family, they can come with you as well and enjoy all the benefits that are available in the country. ",
    },
    {
      id: 2,
      icon: <IconAtom size={36} color="#ffffff" stroke={1} />,
      topic: "Study",
      aos: "fade-left",
      bgCol: "bg-co-yellow",
      link: "/study",
      paragraph:
        "The benefits of studying abroad is massive and you would never know until you embark on the journey to explore what is obtainable on the other side of the divide.",
    },
    {
      id: 3,
      icon: <IconSchool size={36} color="#ffffff" stroke={1} />,
      topic: "Scholarship",
      aos: "fade-left",
      bgCol: "bg-blue-400",
      link: "/scholarship",
      paragraph:
        "There are various schools that offer subsidized tuition. So whether it's full or part scholarship, we help connect you to these opportunities overseas.",
    },
  ];
  return (
    <section id="features" className="py-16 px-4 md:py-24 -mt-24 md:-mt-0 relative bg-white">
      <div className="xl:max-w-6xl md:max-w-4xl mx-auto">
        <div className="text-center">
          <h3 className="font-bold md:text-4xl text-2xl text-blue-900">
          What we can <span className="text-co-yellow">do for you</span>
          </h3>
          
          <p className="mx-auto md:max-w-3xl px-4 mt-8 md:mt-8 text-gray-500">
            We help you alleviate the stress involved in relocating to "the abroad" for your studies
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-8 md:space-y-0 mt-12">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="rounded-lg shadow-2xl bg-gray-100 p-6 "
              data-aos={feature.aos}
              data-aos-offset={100}
            >
              <div className={`${feature.bgCol} w-12 h-12 rounded-full flex justify-center items-center`}>
                {feature.icon}
              </div>
              <h3 className="text-lg mt-2 text-blue-900 font-semibold">
                {feature.topic}
              </h3>
              <p className="mt-4 text-gray-700">
                {feature.paragraph}
              </p>
              <Link className="mt-4 inline-block font-semibold text-sm text-blue-900" to={feature.link}>Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

