import React from "react";
import MainBlogPostCard from "./components/mainBlogPostCard";
import BlogListings from "./components/blogListings";
import EmailOptInForm from "./components/emailOptInForm";


export default function page() {
  return (
    <div className="container my-10">
      <h1 className="font-bold text-3xl text-center my-5">News</h1>
      <MainBlogPostCard />
      <EmailOptInForm />
      <BlogListings />
    </div>
  );
}
