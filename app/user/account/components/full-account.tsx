"use client";
import ResetPassword from "./reset-password";
import AccountDetails from "./account-details";
import Logout from "./logout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import ProfileDetails from "./profile-details";
import WorkPreferences from "./work-preferences";

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
      <TabsList className="w-full p-1 rounded border flex md:flex-nowrap font-bold text-sm justify-around mb-10 bg-primary-foreground flex-wrap">
        <TabsTrigger
          value="account-details"
          className="data-[state=active]:bg-background p-2 rounded w-full md:border-0 border-b-2"
        >
          ACCOUNT DETAILS
        </TabsTrigger>

        <TabsTrigger
          value="profile-details"
          className="data-[state=active]:bg-background p-2 rounded w-full md:border-0 border-b-2"
        >
          PROFILE DETAILS
        </TabsTrigger>
        <TabsTrigger
          value="work-preferences"
          className="data-[state=active]:bg-background p-2 rounded w-full md:border-0 border-b-2"
        >
          WORK PREFERENCES
        </TabsTrigger>
        <TabsTrigger
          value="reset-password"
          className="data-[state=active]:bg-background p-2 rounded w-full md:border-0 border-b-2"
        >
          RESET PASSWORD
        </TabsTrigger>
        <TabsTrigger
          value="logout"
          className="data-[state=active]:bg-background p-2 rounded w-full md:border-0 border-b-2"
        >
          LOGOUT
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account-details">
        <AccountDetails userData={userData} />
      </TabsContent>
      <TabsContent value="profile-details">
        <ProfileDetails />
      </TabsContent>
      <TabsContent value="work-preferences">
        <WorkPreferences />
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
