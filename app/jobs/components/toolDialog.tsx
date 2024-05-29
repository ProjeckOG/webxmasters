import React, { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/lib/@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem, CommandList } from "cmdk";

interface ToolDialogProps {
  onSelectTool: (tool: string) => void;
}

const ToolDialog: React.FC<ToolDialogProps> = ({ onSelectTool }) => {
  const [tools, setTools] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<string>("");

  useEffect(() => {
    fetch('/api/tools.json')
      .then(response => response.json())
      .then(data => setTools(data.map((tool: any) => tool.name)))
      .catch(error => console.error('Failed to fetch tools', error));
  }, []);

  const MAX_ITEMS = 10; // Limit the number of items to display
  const displayedTools = tools.slice(0, MAX_ITEMS);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {selectedTool || "Select Tool"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search tools..." className="bg-secondary" />
          <CommandEmpty>No tool found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {displayedTools.map((tool) => (
                <CommandItem
                  key={tool}
                  value={tool}
                  onSelect={() => {
                    onSelectTool(tool);
                    setSelectedTool(tool);
                    setOpen(false);
                  }}
                >
                  <Check className={`mr-2 h-4 w-4 ${selectedTool === tool ? "opacity-100" : "opacity-0"}`} />
                  {tool}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ToolDialog;
