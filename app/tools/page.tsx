"use client"// tools.tsx
import { useState, useEffect } from 'react';
import CategoryFilter from './components/categoryFilter';
import FeatureFilter from './components/featureFilter';
import SearchBar from './components/searchBar';
import ToolCard from './components/toolCard';
import AddToolBtn from './components/addToolBtn';

interface Tool {
  id: string;
  name: string;
  description: string;
  website: string;
  logo: string;
  categories?: string[];
  features?: string[];
  promoted: boolean;
}

const fetchTools = async (): Promise<Tool[]> => {
  const response = await fetch('/api/tools.json');
  const data = await response.json();
  return data;
};

export default function Tools() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  useEffect(() => {
    fetchTools().then(setTools);
  }, []);

  const filteredTools = tools.filter((tool) => {
    const matchesSearchTerm = tool.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategories = selectedCategories.length === 0 || selectedCategories.some((category) => tool.categories?.includes(category));
    const matchesFeatures = selectedFeatures.length === 0 || selectedFeatures.every((feature) => tool.features?.includes(feature));

    return matchesSearchTerm && matchesCategories && matchesFeatures;
  });

  const handleCategoryRemove = (category: string) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };

  const handleFeatureRemove = (feature: string) => {
    setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
  };

  const promotedTools = filteredTools.filter((tool) => tool.promoted);
  const regularTools = filteredTools.filter((tool) => !tool.promoted);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-10">WEBMASTERS TOOLS LIST</h1>
      <div className="flex justify-center gap-4 items-center flex-wrap">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
        <FeatureFilter selectedFeatures={selectedFeatures} setSelectedFeatures={setSelectedFeatures} />
        <AddToolBtn />
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {selectedCategories.map((category) => (
          <span key={category} className="flex items-center bg-secondary p-2 rounded text-xs">
            {category}
            <button className="ml-2 text-red-500" onClick={() => handleCategoryRemove(category)}>
              ✕
            </button>
          </span>
        ))}
        {selectedFeatures.map((feature) => (
          <span key={feature} className="flex items-center border p-2 rounded text-xs">
            {feature}
            <button className="ml-2 text-red-500" onClick={() => handleFeatureRemove(feature)}>
              ✕
            </button>
          </span>
        ))}
      </div>
      <div className="mt-10">
        {promotedTools.length > 0 && (
          <div className="mb-10">
            <div className="flex flex-wrap  justify-center">
              {promotedTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-wrap justify-center container">
          {regularTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
