import ENU from '../assets/partners/enu.png'
import Bristol from '../assets/partners/bristol.png'
import Bmg from '../assets/partners/birmingham.png'
import Essex from '../assets/partners/essex.jpg'
import Aston from '../assets/partners/aston.png'
import Cam from '../assets/partners/cam.png'
import Reading from '../assets/partners/reading.png'
import Lancaster from '../assets/partners/lancaster.png'

const logos = [ENU, Bristol, Bmg, Essex, Aston, Cam, Reading, Lancaster]

const Steps = () => {
  return (
    <section className="py-16 px-4 md:py-24 relative bg-white">
      <div className="max-w-6xl mx-auto flex space-x-10">
        <div className="text-center w-1/2">
          <h3 className="font-bold md:text-3xl text-2xl text-blue-900">
            We know where you can find  
            <span className="text-co-yellow"> scholarship opportunities</span>
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-3 w-1/2">
         {
           logos.map((logo, i) => (
             <div><img src={logo} alt="" /></div>
           ))
         }
        </div>
      </div>
    </section>
  );
};

export default Steps;
