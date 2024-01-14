
import ResetPassword from "./reset-password";
import AccountDetails from "./account-details";
import Logout from "./logout";
const FullAccount = () => {

  return (
    <div className="mb-10">
     <AccountDetails />
     <ResetPassword />
     <Logout />
    </div>
  );
};

export default FullAccount;
