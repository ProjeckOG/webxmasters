// pages/about.tsx
import { Button } from "@/lib/@/components/ui/button";
import { Home, Link } from "lucide-react";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold uppercase  justify-start mb-10">
          About Us YEah
        </h1>
        <p className="text-lg text-gray-500 tracking-wide	leading-9  mb-6">
          Welcome to WebXMasters, the premier community-driven platform
          dedicated to empowering webmasters with the tools and knowledge needed
          to excel online. Whether you're exploring website builders, delving
          into email marketing, or seeking the best web hosting solutions,
          WebXMasters is your go-to resource.
        </p>
        <hr />
        <h2 className="text-xl uppercase font-bold   my-10">Our Mission</h2>
        <p className="text-lg text-gray-500 tracking-wide leading-9		 mb-6">
          Our mission is to create a vibrant, informative, and supportive
          community where webmasters can discover, discuss, and share the best
          tools and practices for online success. We aim to demystify the
          digital world, making technology accessible and manageable for
          professionals and enthusiasts alike.
        </p>
        <h2 className="text-xl uppercase font-bold  my-10">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-500 tracking-wide leading-9	 mb-8">
          Ready to elevate your online presence? Join WebXMasters today and
          start exploring the limitless possibilities of the web. Together, we
          can build, grow, and thrive in the digital age.
        </p>
        <a href="/signup" className="flex justify-center items-center">
          <Button className=" flex justify-center border font-bold p-10 uppercase hover:bg-primary-foreground mx-auto rounded-full  transition duration-300 ease-in-out transform hover:-translate-y-1">
            <Home className="mr-3" />
            Join Now
          </Button>
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
