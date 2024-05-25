import React, { FC } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/lib/@/components/ui/button';

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

const tools = ['Webflow', 'Shopify', 'WordPress', 'AWS', 'Figma']; // Example tools

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
        className="p-2 border rounded bg-primary-foreground"
      />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Tools</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-2">
          {tools.map(tool => (
            <DropdownMenuCheckboxItem
              key={tool}
              checked={selectedTools.includes(tool)}
              onCheckedChange={() => handleToolChange(tool)}
              className="flex items-center space-x-2"
            >
              {tool}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="p-2 border rounded bg-primary-foreground"
      >
        <option value="recent">Recent</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default FilterComponent;
