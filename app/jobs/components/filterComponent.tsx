import React, { FC } from 'react';

interface FilterProps {
  selectedTools: string[];
  setSelectedTools: (tools: string[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

const tools = ['React', 'Tailwind CSS', 'Node.js', 'Express']; // Example tools

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
  const handleToolChange = (tool: string) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter(t => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <input
        type="text"
        placeholder="Search by job title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="p-2 border rounded"
      />
      <div className="flex gap-4">
        {tools.map(tool => (
          <label key={tool} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedTools.includes(tool)}
              onChange={() => handleToolChange(tool)}
              className="form-checkbox"
            />
            <span>{tool}</span>
          </label>
        ))}
      </div>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="recent">Recent</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default FilterComponent;
