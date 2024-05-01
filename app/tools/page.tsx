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
  {
    id: "mailchimp",
    name: "Mailchimp",
    description:
      "Mailchimp is an all-in-one marketing platform that helps you manage and talk to your clients, customers, and other interested parties.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968514.png",
    categories: ["Email Marketing", "Automation", "Campaigns"],
  },
  {
    id: "canva",
    name: "Canva",
    description:
      "Canva is a graphic design platform, used to create social media graphics, presentations, posters, documents, and other visual content.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968701.png",
    categories: ["Design", "Templates", "Creativity"],
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description:
      "HubSpot offers a full platform of marketing, sales, customer service, and CRM software — plus the methodology, resources, and support — to help businesses.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
    categories: ["CRM", "Marketing", "Sales"],
  },
  {
    id: "zendesk",
    name: "Zendesk",
    description:
      "Zendesk is a service-first CRM company that builds software designed to improve customer relationships.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968337.png",
    categories: ["Customer Support", "CRM", "Help Desk"],
  },
  {
    id: "figma",
    name: "Figma",
    description:
      "Figma is a cloud-based design tool that is similar to Sketch in functionality and features, but with big differences that make Figma better for team collaboration.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968865.png",
    categories: ["Design", "Prototyping", "Collaboration", "Design", "Prototyping", "Collaboration"],
  }
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
      <div className="flex flex-wrap gap-5 justify-around mt-5">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  </div>
  );
}
