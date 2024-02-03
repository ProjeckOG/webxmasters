import { Button } from "@/lib/@/components/ui/button";
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
    <div className="w-3/4 md:w-3/4 mx-auto ">
      <h1 className="text-3xl text-center font-bold uppercase">
        Discover webmaster tools and get started building today
      </h1>
      <h2 className="text-center text-2xl mt-5">What do you want to build?</h2>
      <div className="flex justify-center flex-wrap	 mx-auto w-full md:w-3/4">
        <div className="bg-primary-color rounded-lg  flex mt-5  justify-center items-center mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <Button  className="bg-secondary rounded-lg w-3/4 h-3/4">
            <PanelsTopLeft className="mx-auto" size={50} />
            WEBSITES
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <Button className="bg-secondary rounded-lg w-3/4 h-3/4">
            <AppWindow className="mx-auto" size={50} />
            <h3 className="mt-2">WEB APPS</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5  justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <Button  className="bg-secondary rounded-lg w-3/4 h-3/4">
            <Smartphone className="mx-auto" size={50} />
            <h3 className="mt-2">MOBILE APPS</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <Button  className="bg-secondary rounded-lg w-3/4 h-3/4">
            <Mail className="mx-auto" size={50} />
            <h3 className="mt-2">EMAIL</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <Button  className="bg-secondary rounded-lg w-3/4 h-3/4">
            <ShoppingBag className="mx-auto" size={50} />
            <h3 className="mt-2">ECOMMERCE</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <Button  className="bg-secondary rounded-lg w-3/4 h-3/4">
            <Bot className="mx-auto" size={50} />
            <h3 className="mt-2">ARTIFICIAL<br /> INTELLIGENCE</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <Button  className="bg-secondary rounded-lg w-3/4 h-3/4">
            <Server className="mx-auto" size={50} />
            <h3 className="mt-2">WEBSITE <br/>HOSTING</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-32 h-32 lg:w-60 lg:h-60">
          <Button  className="bg-secondary rounded-lg w-3/4 h-3/4">
            <Database className="mx-auto" size={50} />
            <h3 className="mt-2">DATABASE</h3>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
