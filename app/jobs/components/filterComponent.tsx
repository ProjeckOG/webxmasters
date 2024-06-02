import React, { FC } from "react";
import JobTypeSelect from "./(filters)/jobTypeSelect";
import LocationSelect from "./(filters)/locationSelect";
import PaySelect from "./(filters)/paySelect";
import ToolDialog from "./(filters)/toolDialog";

interface FilterProps {
  selectedTools: string[];
  setSelectedTools: (tools: string[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedJobType: string;
  setSelectedJobType: (jobType: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  selectedPay: string;
  setSelectedPay: (pay: string) => void;
}

const FilterComponent: FC<FilterProps> = ({
  selectedTools,
  setSelectedTools,
  searchTerm,
  setSearchTerm,
  selectedJobType,
  setSelectedJobType,
  selectedLocation,
  setSelectedLocation,
  selectedPay,
  setSelectedPay,
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
        <JobTypeSelect selectedJobType={selectedJobType} setSelectedJobType={setSelectedJobType} />
        <LocationSelect selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
        <PaySelect selectedPay={selectedPay} setSelectedPay={setSelectedPay} />
      </div>
      <div className="flex flex-wrap gap-2">
        {selectedTools.map((tool) => (
          <div key={tool} className="flex items-center border p-3 rounded hover:bg-secondary">
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
