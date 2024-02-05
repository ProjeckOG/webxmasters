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
        <div className="bg-primary-color rounded-lg  flex mt-5  justify-center items-center mr-5 text-center w-60 h-60">
          <Button  className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
            <PanelsTopLeft className="mx-auto "  size={50} />
            WEBSITES
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-60 h-60">
          <Button className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
            <AppWindow className="mx-auto" size={50} />
            <h3 className="mt-2">WEB APPS</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5  justify-center items-center  mr-5 text-center w-60 h-60">
          <Button  className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
            <Smartphone className="mx-auto" size={50} />
            <h3 className="mt-2">MOBILE APPS</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center mr-5 text-center w-60 h-60">
          <Button  className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
            <Mail className="mx-auto" size={50} />
            <h3 className="mt-2">EMAIL</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-60 h-60">
          <Button  className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
            <ShoppingBag className="mx-auto" size={50} />
            <h3 className="mt-2">ECOMMERCE</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-60 h-60">
          <Button  className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
            <Bot className="mx-auto" size={50} />
            <h3 className="mt-2">ARTIFICIAL<br /> INTELLIGENCE</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-60 h-60">
          <Button  className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
            <Server className="mx-auto" size={50} />
            <h3 className="mt-2">WEBSITE <br/>HOSTING</h3>
          </Button>
        </div>
        <div className="bg-primary-color rounded-lg  flex mt-5 justify-center items-center  mr-5 text-center w-60 h-60">
          <Button  className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
            <Database className="mx-auto" size={50} />
            <h3 className="mt-2">DATABASE</h3>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
