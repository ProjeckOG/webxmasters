import { Button } from "@/lib/@/components/ui/button";
import { Mail } from "lucide-react";

export default function Support() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4 ">
      <h1 className="text-5xl font-bold text-center  mb-6">
        Need Help?
      </h1>
      <p className="text-lg text-center  mb-8">
        Our team is here to assist you. If you have any questions or encounter
        any issues, don't hesitate to reach out.
      </p>
      <a href="mailto:support@webxmasters.io">
        <Button className=" flex justify-center border font-bold p-10 uppercase hover:bg-primary-foreground mx-auto rounded-full  transition duration-300 ease-in-out transform hover:-translate-y-1">
          <Mail className="mr-3" />
          Contact Support
        </Button>
       
      </a>
    </div>
  );
}
