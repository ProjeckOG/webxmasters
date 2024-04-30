"use client";
import { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import ToolCard from "./components/toolCard";

const toolData = [
  {
    id: "wix",
    name: "Wix",
    description:
      "Wix offers a versatile website builder platform with customizable templates and drag-and-drop simplicity, ideal for personal and small business websites.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    categories: ["Drag-and-Drop", "Business", "eCommerce"],
  },
  {
    id: "squarespace",
    name: "Squarespace",
    description:
      "Squarespace provides beautiful templates and an all-in-one solution for building professional websites, blogs, and online stores.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    categories: ["Templates", "Professional", "Portfolio"],
  },
  {
    id: "wordpress",
    name: "WordPress",
    description:
      "WordPress is a powerful content management system known for its flexibility and vast plugin ecosystem, making it a top choice for blogs and complex websites.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968646.png",
    categories: ["CMS", "Open Source", "Customizable"],
  },
  {
    id: "shopify",
    name: "Shopify",
    description:
      "Shopify offers an easy-to-use ecommerce platform that allows anyone to set up an online store and sell their products.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968827.png",
    categories: ["eCommerce", "Store Builder", "Business"],
  },
  {
    id: "adobexd",
    name: "Adobe XD",
    description:
      "Adobe XD is a powerful tool for designing and prototyping user experiences for web and mobile apps.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968779.png",
    categories: ["UI/UX Design", "Prototyping", "Creative"],
  },
];

export default function Tools() {
  const [tools, setTools] = useState(toolData);

  return (
    <div className="">
    <h1 className="text-center text-4xl font-bold my-10">
      WEBMASTERS TOOLS LIST
    </h1>
    <SearchBar />
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-5 justify-center mt-5">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  </div>
  );
}
