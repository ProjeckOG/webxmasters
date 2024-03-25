'use client'
import ResetPassword from "./reset-password";
import AccountDetails from "./account-details";
import Logout from "./logout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

interface UserData {
  username?: string;
  name?: string;
  email?: string;
  phone?: string;
  // Add other fields as necessary
}

interface FullAccountProps {
  userData: UserData;
}



const FullAccount: React.FC<FullAccountProps> = ({ userData }) => {
  
  return (
    <Tabs defaultValue="account-details">
      <TabsList className="w-full p-1 rounded border flex font-bold justify-around mb-10 bg-primary-foreground">
        <TabsTrigger
          value="account-details"
          className="data-[state=active]:bg-background p-2 rounded w-full"
        >
          ACCOUNT DETAILS
        </TabsTrigger>
        <TabsTrigger
          value="reset-password"
          className="data-[state=active]:bg-background p-2 rounded w-full"
        >
          RESET PASSWORD
        </TabsTrigger>
        <TabsTrigger
          value="logout"
          className="data-[state=active]:bg-background p-2 rounded w-full"
        >
          LOGOUT
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account-details">
        <AccountDetails userData={userData} />
      </TabsContent>
      <TabsContent value="reset-password">
        <ResetPassword />
      </TabsContent>
      <TabsContent value="logout">
        <Logout />
      </TabsContent>
    </Tabs>
  );
};

export default FullAccount;
