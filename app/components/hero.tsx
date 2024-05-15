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
import Link from "next/link";
const Hero = () => {
  return (
    <div className="w-3/4 md:w-3/4 mx-auto ">
      <h1 className="text-3xl text-center font-bold uppercase">
        Discover webmaster tools and get started building today
      </h1>
      <h2 className="text-center text-2xl mt-5">What do you want to build?</h2>
      <div className="flex justify-center items-center flex-wrap">
        <Link href={"/tools"}>
          <div className="bg-primary-color rounded-lg  mt-5 flex  mr-5 w-32 h-32">
            <Button className="bg-secondary hover:border-2  hover:bg-background rounded-lg w-full h-full">
              <PanelsTopLeft size={30} className="mx-auto" />
              WEBSITES
            </Button>
          </div>
        </Link>
        <Link href={"/tools"}>
          <div className="bg-primary-color rounded-lg  mt-5  mr-5 w-32 h-32">
            <Button className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
              <AppWindow size={30} className="mx-auto" />
              <h3 className="mt-2">WEB APPS</h3>
            </Button>
          </div>
        </Link>
        <Link href={"/tools"}>
          <div className="bg-primary-color rounded-lg   mt-5    mr-5 w-32 h-32">
            <Button className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
              <Smartphone size={30} className="mx-auto" />
              <h3 className="mt-2">MOBILE APPS</h3>
            </Button>
          </div>
        </Link>
        <Link href={"/tools"}>
          <div className="bg-primary-color rounded-lg   mt-5  mr-5 w-32 h-32">
            <Button className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
              <Mail size={30} className="mx-auto" />
              <h3 className="mt-2">EMAIL</h3>
            </Button>
          </div>
        </Link>
        <Link href={"/tools"}>
          <div className="bg-primary-color rounded-lg   mt-5   mr-5 w-32 h-32">
            <Button className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
              <ShoppingBag size={30} className="mx-auto" />
              <h3 className="mt-2">ECOMMERCE</h3>
            </Button>
          </div>
        </Link>
        <Link href={"/tools"}>
          <div className="bg-primary-color rounded-lg   mt-5   mr-5 w-32 h-32">
            <Button className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
              <Bot size={30} className="mx-auto" />
              <h3 className="mt-2">
                ARTIFICIAL
                <br /> INTELLIGENCE
              </h3>
            </Button>
          </div>
        </Link>
        <Link href={"/tools"}>
          <div className="bg-primary-color rounded-lg   mt-5   mr-5 w-32 h-32">
            <Button className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
              <Server size={30} className="mx-auto" />
              <h3 className="mt-2">
                WEBSITE <br />
                HOSTING
              </h3>
            </Button>
          </div>
        </Link>
        <Link href={"/tools"}>
          <div className="bg-primary-color rounded-lg   mt-5   mr-5 w-32 h-32">
            <Button className="bg-secondary hover:border-2 hover:bg-background rounded-lg w-full h-full">
              <Database size={30} className="mx-auto" />
              <h3 className="mt-2">DATABASE</h3>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
