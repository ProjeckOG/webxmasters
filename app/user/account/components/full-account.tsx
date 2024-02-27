"use client";
import ResetPassword from "./reset-password";
import AccountDetails from "./account-details";
import Logout from "./logout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Suspense } from "react";
const FullAccount = () => {
  return (
    <Tabs defaultValue="account-details">
      <TabsList className="w-full p-1 rounded border flex font-bold justify-around mb-10 bg-secondary">
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
