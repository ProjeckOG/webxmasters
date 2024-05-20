"use client";
import { useState, useEffect } from "react";
import CategoryFilter from "./components/categoryFilter";
import FeatureFilter from "./components/featureFilter";
import SearchBar from "./components/searchBar";
import ToolCard from "./components/toolCard";


// Define the types for the tools
interface Tool {
  id: string;
  name: string;
  description: string;
  website: string;
  logo: string;
  categories?: string[]; // Make categories optional
}

const fetchTools = async (): Promise<Tool[]> => {
  const response = await fetch('/api/tools.json');
  const data = await response.json();
  return data;
};

export default function Tools() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  useEffect(() => {
    fetchTools().then(setTools);
  }, []);

  const filteredTools = tools.filter(tool => {
    const matchesSearchTerm = tool.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategories = selectedCategories.length === 0 || selectedCategories.some(category => tool.categories?.includes(category));
    const matchesFeatures = selectedFeatures.length === 0 || selectedFeatures.every(feature => tool.categories?.includes(feature));

    return matchesSearchTerm && matchesCategories && matchesFeatures;
  });

  return (
    <div className="md:w-3/4 mx-auto">
      <h1 className="text-center text-4xl font-bold my-10">WEBMASTERS TOOLS LIST</h1>
      <div className="flex justify-center gap-4 my-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
        <FeatureFilter selectedFeatures={selectedFeatures} setSelectedFeatures={setSelectedFeatures} />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-5 justify-around mt-5">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
