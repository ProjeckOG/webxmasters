// pages/legal.tsx
import { Button } from "@/lib/@/components/ui/button";
import { FileText, Link } from "lucide-react";
import React from "react";

const Legal = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold uppercase justify-start mb-10">
          Legal Disclaimer
        </h1>
        <p className="text-lg text-gray-500 tracking-wide leading-9 mb-6">
          The information provided by WebXMasters on our website is for general
          informational purposes only. All information on the Site is provided
          in good faith, however, we make no representation or warranty of any
          kind, express or implied, regarding the accuracy, adequacy, validity,
          reliability, availability, or completeness of any information on the
          Site.
        </p>
        <hr />
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
        <a href="mailto:support@webxmasters.io" className="flex justify-center items-center">
          <Button className="flex justify-center border font-bold p-10 uppercase hover:bg-primary-foreground mx-auto rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1">
            <FileText className="mr-3" />
            Contact Us
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Legal;
