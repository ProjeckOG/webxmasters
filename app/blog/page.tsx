import React from "react";
import MainBlogPostCard from "./components/mainBlogPostCard";
import BlogListings from "./components/blogListings";


export default function page() {
  return (
    <div className="md:w-3/4 mx-auto my-10">
      <h1 className="font-bold text-3xl text-center my-5">News</h1>
      <MainBlogPostCard />
      <BlogListings />
    </div>
  );
}
