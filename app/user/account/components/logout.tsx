import { Button } from "@/lib/@/components/ui/button";

const Logout = () => {
  return (
    <form
      action="/auth/logout"
      method="post"
      className="w-full  py-2 px-4 rounded"
    >
      <Button
        type="submit"
        className="w-full uppercase text-xl m-3 p-10 flex items-center font-bold hover:bg-destructive"
        variant={"outline"}
      >
        Do you want to Logout?
      </Button>
    </form>
  );
};

export default Logout;
