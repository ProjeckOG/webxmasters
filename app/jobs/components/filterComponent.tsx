import React, { FC } from "react";
import FeatureDialog from "../../tools/components/featureDialog";
import ToolDialog from "./toolDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/@/components/ui/select";

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
          className="p-2 border rounded bg-primary-foreground"
        />

        <ToolDialog onSelectTool={handleSelectTool} />

        <Select
          onValueChange={(value) => setSortOption(value)}
          value={sortOption}
        >
          <SelectTrigger className="p-2 border rounded bg-primary-foreground w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent className="w-[180px] bg-primary-foreground border-none">
            <SelectItem value="recent">Recent</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap gap-2">
        {selectedTools &&
          selectedTools.map((tool) => (
            <div
              key={tool}
              className="flex items-center border p-3 rounded hover:bg-secondary"
            >
              {tool}
              <button
                onClick={() => handleRemoveTool(tool)}
                className="ml-3 text-red-600"
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
