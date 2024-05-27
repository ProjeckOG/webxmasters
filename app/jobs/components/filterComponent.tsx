import React, { FC } from "react";
import { Button } from "@/lib/@/components/ui/button";
import SearchableDropdown from "./toolSearchbar";

interface FilterProps {
  selectedTools: string[];
  setSelectedTools: (tools: string[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => all;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

const tools = ["Webflow", "Shopify", "WordPress", "AWS", "Figma"]; // Example tools from JSON or similar

const FilterComponent: FC<FilterProps> = ({
  selectedTools,
  setSelectedTools,
  searchTerm,
  setSearchTerm,
  selectedDate,
  setSelectedDate,
  sortOption,
  setSortOption,
}) => {
  const handleRemoveTool = (tool: string) => {
    setSelectedTools(selectedTools.filter((t) => t !== tool));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <input
          type="text"
          placeholder="Search by job title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded"
        />

        <SearchableDropdown tools={tools} selectedTools={selectedTools} setSelectedTools={setSelectedTools} />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="recent">Recent</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-2">
        {selectedTools.map((tool) => (
          <div key={tool} className="flex items-center border p-2 rounded">
            {tool}
            <button onClick={() => handleRemoveTool(tool)} className="ml-2 text-red-500">
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
