
import { PanelsTopLeft } from "lucide-react";
const Hero = () => {


  return (
    <div className="w-3/4 md:w-3/4 mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center uppercase">Discover webmaster tools and get started building today</h1>
        <h2 className="text-center text-2xl mt-5">What do you want to build?</h2>
        <div className="flex">
        <div className="bg-primary-color rounded-lg  flex justify-center items-center text-center w-60 h-60">
            <div className="">
            <PanelsTopLeft className="mx-auto" size={60} />
            <h3 className="font-bold mt-2">WEBSITES</h3>
            </div>
        </div>
        <div className="bg-primary-color rounded-lg  flex justify-center items-center text-center w-60 h-60">
            <div className="">
            <PanelsTopLeft className="mx-auto" size={60} />
            <h3 className="font-bold mt-2">WEB APPS</h3>
            </div>
        </div>

        </div>
    </div>
  );
};

export default Hero;
