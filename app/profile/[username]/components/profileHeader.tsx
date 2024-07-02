import { Button } from "@/lib/@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  ScreenShare,
  ShieldEllipsis,
  Twitter,
  UserCog,
} from "lucide-react";
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
    <Card className="text-center bg-primary-foreground p-2 ">
      <CardHeader>
      </CardHeader>
      <CardContent>
      <Avatar className="my-4">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Profile Picture"
            className="rounded-full w-1/6 mx-auto ring-4 ring-secondary"
          />
          <AvatarFallback>Profile Picture</AvatarFallback>
        </Avatar>
      <p className="text-base py-2">@Deezxus</p>
      <CardTitle className="">Entrepreneur</CardTitle>
        <div className="flex flex-col items-center justify-center gap-3 ">
          I am here to build things that will change the world
          <div className="item-center flex">
            <Button variant={"outline"} className="rounded-full 	border-2		">
              Follow
            </Button>
            <Button variant={"outline"} className="rounded-full border-2 	 	">
              <UserCog />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="">
        <div className="flex mx-auto gap-5 ">
          <ScreenShare />
          <Github />
          <Twitter />
          <Facebook />
          <Instagram />
          <Linkedin />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProfileHeader;
