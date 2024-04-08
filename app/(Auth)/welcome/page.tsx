import WelcomeForm from "./components/welcomeForm";

export default function Welcome() {
  return (
    <div className="my-32 flex items-center justify-center">
      <div className="mx-auto p-8 border  md:w-1/3 w-full	 rounded-lg">
        <h2 className="text-3xl mb-6 text-center font-bold">
          One More Step...
        </h2>
        <WelcomeForm />
      </div>
    </div>
  );
}
