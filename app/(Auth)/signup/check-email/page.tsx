import { Inbox, Wrench } from "lucide-react";

export default function CheckEmail() {
  return (
    <div className="my-20 items-center w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto mt-5 p-10 border shadow-lg rounded-lg">
      <div className="flex justify-center mb-4">
        <Inbox size={50} />
      </div>
      <h2 className="text-3xl text-center font-bold underline mb-4">
        Please Check Your Inbox!
      </h2>
      <p className="text-base leading-relaxed">
        To complete your signup process and <b>activate</b> your account, we've
        sent a confirmation email.
        <br />
        <br />
        Please check your inbox (and the spam/junk folder, just in case) for an
        email from us and click on the "Confirm your email" button within that
        email.
      </p>
      <hr className="my-10" />
      <div className="flex justify-center mb-4">
        <Wrench size={40} />
      </div>
      <h2 className="font-bold text-center text-2xl underline mt-6 mb-3">
        Need Assistance?
      </h2>
      <p className="text-base mb-3">
        We're here to help! If you encounter any issues or have questions,
        please don't hesitate to contact our support team. You can reach us at{" "}
        <a
          href="mailto:support@webxmasters.io"
          className="underline hover:text-indigo-800"
        >
          support@webxmasters.io
        </a>{" "}
        or visit our Help Center for quick answers and support resources.
      </p>
    </div>
  );
}
