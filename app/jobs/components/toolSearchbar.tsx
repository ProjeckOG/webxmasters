import { AlertDialogHeader, AlertDialogFooter } from '@/lib/@/components/ui/alert-dialog';
import { Button } from '@/lib/@/components/ui/button';
import { Input } from '@/lib/@/components/ui/input';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import React, { useState, useEffect } from 'react';

interface SearchableDropdownProps {
  tools: string[];
  selectedTools: string[];
  setSelectedTools: (tools: string[]) => void;
}

const SearchableDropdownDialog: React.FC<SearchableDropdownProps> = ({ tools, selectedTools, setSelectedTools }) => {
  const [search, setSearch] = useState('');
  const [filteredTools, setFilteredTools] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setFilteredTools(
      tools.filter(tool => tool.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, tools]);

  const handleSelectTool = (tool: string) => {
    if (!selectedTools.includes(tool)) {
      setSelectedTools([...selectedTools, tool]);
      setOpen(false); // Optionally close the dialog upon selection
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Search Jobs By Tools</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select Tool</AlertDialogTitle>
          <AlertDialogDescription>
            Search and select the tools you want to include.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded"
        />
        <ul className="max-h-60 overflow-auto">
          {filteredTools.map((tool, index) => (
            <li key={index} onClick={() => handleSelectTool(tool)} className="p-2 hover:bg-gray-100 cursor-pointer">
              {tool}
            </li>
          ))}
        </ul>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SearchableDropdownDialog;
