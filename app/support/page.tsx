import { Button } from "@/lib/@/components/ui/button";
import { MailIcon } from "lucide-react";

export default function Support() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border p-4 ">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Need Help?
      </h1>
      <p className="text-lg text-center text-white mb-8">
        Our team is here to assist you. If you have any questions or encounter
        any issues, don't hesitate to reach out.
      </p>
      <Button className=" flex justify-center border font-bold p-10 uppercase hover:bg-primary-foreground mx-auto rounded-full  transition duration-300 ease-in-out transform hover:-translate-y-1">
        <a href="mailto:support@webxmasters.io"> Contact Support</a>
      </Button>
    </div>
  );
}
