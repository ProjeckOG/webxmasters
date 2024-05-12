// components/PostDetail.tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/lib/@/components/ui/avatar";
import Image from "next/image";
import React from "react";

interface PostDetailProps {
  post: {
    title: string;
    content: string;
    author: string;
    date: string;
    imageUrl: string; // URL of the post image
    imageAlt: string; // Alt text for the post image
  };
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-3xl font-bold text-center">{post.title}</h1>
          <p className=" ">{`By ${post.author} on ${post.date}`}</p>
        </div>
      </div>
      {post.imageUrl && (
        <div className="my-4 mx-auto">
          <Image
            className=" rounded-lg"
            src={post.imageUrl}
            alt={post.imageAlt || "Post image"}
            width={200}
            height={300}
            
            layout="responsive"
          />
        </div>
      )}
      <p className="">{post.content}</p>
    </div>
  );
};

export default PostDetail;
