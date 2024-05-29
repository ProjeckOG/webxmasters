import React, { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/lib/@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem, CommandList } from "cmdk";

interface FeatureDialogProps {
  onSelectFeature: (feature: string) => void;
}

const FeatureDialog: React.FC<FeatureDialogProps> = ({ onSelectFeature }) => {
  const [features, setFeatures] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string>("");

  useEffect(() => {
    fetch('/api/features.json')
      .then(response => response.json())
      .then(data => setFeatures(data.map((feature: any) => feature.name)))
      .catch(error => console.error('Failed to fetch features', error));
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {selectedFeature || "Select Feature"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search features..." />
          <CommandEmpty>No feature found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
            {features.map((feature) => (
              <CommandItem
                key={feature}
                value={feature}
                onSelect={() => {
                  onSelectFeature(feature);
                  setSelectedFeature(feature);
                  setOpen(false);
                }}
              >
                <Check className={`mr-2 h-4 w-4 ${selectedFeature === feature ? "opacity-100" : "opacity-0"}`} />
                {feature}
              </CommandItem>
            ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FeatureDialog;
