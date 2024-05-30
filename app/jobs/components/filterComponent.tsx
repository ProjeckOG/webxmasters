import React, { FC, useState } from "react";
import FeatureDialog from "../../tools/components/featureDialog";
import ToolDialog from "./toolDialog";
;

interface FilterProps {
  selectedTools: string[];
  setSelectedTools: (tools: string[]) => void;
  selectedFeatures: string[];
  setSelectedFeatures: (features: string[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

const FilterComponent: FC<FilterProps> = ({
  selectedTools,
  setSelectedTools,
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
}) => {
  const handleSelectTool = (tool: string) => {
    if (!selectedTools.includes(tool)) {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const handleRemoveTool = (tool: string) => {
    setSelectedTools(selectedTools.filter(t => t !== tool));
  };


  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <input
          type="text"
          placeholder="Search by job title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded bg-primary-foreground"
        />

        <ToolDialog onSelectTool={handleSelectTool} />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded bg-primary-foreground"
        >
          <option value="recent">Recent</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-2">
        {selectedTools && selectedTools.map((tool) => (
          <div key={tool} className="flex items-center border p-3 rounded hover:bg-secondary ">
            {tool}
            <button
              onClick={() => handleRemoveTool(tool)}
              className="ml-3 text-red-600 "
              aria-label={`Remove ${tool}`}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
