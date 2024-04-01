"use client";
import ResetPassword from "./reset-password";
import AccountDetails from "./account-details";
import Logout from "./logout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

interface FullAccountProps {
  userData: {
    raw_user_meta_data: {
      name: string;
    };
    email: string;
    app_metadata: {
      provider: string;
      providers: string[];
    };
    // Include other properties as necessary
  };
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
        <ResetPassword userData={userData} />
      </TabsContent>
      <TabsContent value="logout">
        <Logout />
      </TabsContent>
    </Tabs>
  );
};

export default FullAccount;
