import {
  AppWindow,
  Bot,
  Database,
  Mail,
  PanelsTopLeft,
  Server,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
const Hero = () => {
  return (
    <div className="w-3/4 md:w-3/4 mx-auto text-white">
      <h1 className="text-3xl font-bold text-center uppercase">
        Discover webmaster tools and get started building today
      </h1>
      <h2 className="text-center text-2xl mt-5">What do you want to build?</h2>
      <div className="flex justify-center flex-wrap	mt-10 mx-auto w-full md:w-3/4">
        <div className="bg-primary-color rounded-lg  flex mt-5  justify-center items-center mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <div className="">
            <PanelsTopLeft className="mx-auto" size={60} />
            <h3 className="font-bold mt-2">WEBSITES</h3>
          </div>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <div className="">
            <AppWindow className="mx-auto" size={60} />
            <h3 className="font-bold mt-2">WEB APPS</h3>
          </div>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5  justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <div className="">
            <Smartphone className="mx-auto" size={60} />
            <h3 className="font-bold mt-2">MOBILE APPS</h3>
          </div>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <div className="">
            <Mail className="mx-auto" size={60} />
            <h3 className="font-bold mt-2">EMAIL</h3>
          </div>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <div className="">
            <ShoppingBag className="mx-auto" size={60} />
            <h3 className="font-bold mt-2">ECOMMERCE</h3>
          </div>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <div className="">
            <Bot className="mx-auto" size={60} />
            <h3 className="font-bold mt-2">ARTIFICIAL INTELLIGENCE</h3>
          </div>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <div className="">
            <Server className="mx-auto" size={60} />
            <h3 className="font-bold mt-2">WEBSITE HOSTING</h3>
          </div>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <div className="">
            <Database className="mx-auto" size={60} />
            <h3 className="font-bold mt-2">DATABASE</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
