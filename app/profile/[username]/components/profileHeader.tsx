import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/@/components/ui/card";
import Image from "next/image";
import React from "react";

interface ProfileHeaderProps {
  username: string;
  jobTitle: string;
  description: string;
  twitterUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  avatarUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  jobTitle,
  description,
  twitterUrl,
  linkedinUrl,
  facebookUrl,
  instagramUrl,
  avatarUrl,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ProfileHeader;
