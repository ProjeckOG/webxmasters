import { Button } from "@/lib/@/components/ui/button";
import { Cookie, FileText, Rows4, StickyNote } from "lucide-react";
import Link from "next/link";
import React from "react";

const Legal = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold uppercase justify-start mb-10">
          Legal Pages
        </h1>
        <p className="text-lg text-gray-500 tracking-wide leading-9 mb-6">
          This section provides important legal information regarding the use of WebXMasters. Please review each document to understand your rights and responsibilities.
        </p>
        <hr />
        <div className="flex justify-center flex-wrap mx-auto gap-2 my-5">
          <Link href="/privacy-policy" className="flex justify-center items-center border font-bold p-4 uppercase hover:bg-primary-foreground rounded-full transition duration-300 ease-in-out">
            <StickyNote className="mr-3" />
            Privacy Policy
          </Link>
          <Link href="/terms-of-use" className="flex justify-center items-center border font-bold p-4 uppercase hover:bg-primary-foreground rounded-full transition duration-300 ease-in-out">
            <FileText className="mr-3" />
            Terms of Use
          </Link>
          <Link href="/cookie-policy" className="flex justify-center items-center border font-bold p-4 uppercase hover:bg-primary-foreground rounded-full transition duration-300 ease-in-out">
            <Cookie  className="mr-3" />
            Cookie Policy
          </Link>
          <Link href="/community-guidelines" className="flex justify-center items-center border font-bold p-4 uppercase hover:bg-primary-foreground rounded-full transition duration-300 ease-in-out">
            <Rows4  className="mr-3" />
            Community Guidelines
          </Link>
        </div>
        <h2 className="text-xl uppercase font-bold my-10">Legal Disclaimer</h2>
        <p className="text-lg text-gray-500 tracking-wide leading-9 mb-6">
          The information provided by WebXMasters on our website is for general
          informational purposes only. All information on the Site is provided
          in good faith, however, we make no representation or warranty of any
          kind, express or implied, regarding the accuracy, adequacy, validity,
          reliability, availability, or completeness of any information on the
          Site.
        </p>
        <h2 className="text-xl uppercase font-bold my-10">Our Liability</h2>
        <p className="text-lg text-gray-500 tracking-wide leading-9 mb-6">
          Under no circumstance shall we have any liability to you for any loss
          or damage of any kind incurred as a result of the use of the site or
          reliance on any information provided on the site. Your use of the site
          and your reliance on any information on the site is solely at your
          own risk.
        </p>
        <h2 className="text-xl uppercase font-bold my-10">
          External Links Disclaimer
        </h2>
        <p className="text-lg text-gray-500 tracking-wide leading-9 mb-8">
          The Site may contain (or you may be sent through the Site) links to
          other websites or content belonging to or originating from third
          parties or links to websites and features. Such external links are not
          investigated, monitored, or checked for accuracy, adequacy, validity,
          reliability, availability, or completeness by us.
        </p>
        <Link href="mailto:support@webxmasters.io" className="flex md:w-1/2 mx-auto justify-center items-center border font-bold p-10 uppercase hover:bg-primary-foreground rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1">
            <FileText className="mr-3" />
           Have a Question? Contact Us Here!
        </Link>
      </div>
    </div>
  );
};

export default Legal;
