import { Badge } from "@/lib/@/components/ui/badge";
import React from "react";

interface PostDetailProps {
  post: {
    title: string;
    content: string;
    author: string;
    date: string;
    image: string;
    imageAlt: string;
  };
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <div className="rounded p-6 mb-4">
      <h1 className="text-4xl uppercase font-bold mb-2 text-center py-5">{post.title}</h1>
      <p className="  mx-auto text-center  rounded-full font-bold" >
         by {post.author}
      </p>
      <p className="text-center mb-5">Date Posted: {post.date}</p>
      <img
        src={post.image}
        alt={post.imageAlt}
        className="w-1/2 mx-auto mb-4"
      />
      <p className="mb-6 whitespace-pre-line">{post.content}</p>
    </div>
  );
};

export default PostDetail;
