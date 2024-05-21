import { Button } from "@/lib/@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import React from "react";


const features = [
  "Drag-and-Drop", "Business", "eCommerce", "Templates", "Professional",
  "Portfolio", "CMS", "Open Source", "Customizable", "UI/UX Design",
  "Prototyping", "Creative", "Email Marketing", "Automation", "Campaigns",
  "Design", "Creativity", "CRM", "Marketing", "Sales", "Customer Support",
  "Help Desk", "Collaboration"
];

interface FeatureFilterProps {
  selectedFeatures: string[];
  setSelectedFeatures: React.Dispatch<React.SetStateAction<string[]>>;
}

const FeatureFilter: React.FC<FeatureFilterProps> = ({ selectedFeatures, setSelectedFeatures }) => {
  const handleFeatureChange = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Features</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 max-h-60 overflow-y-auto">
        {features.map(feature => (
          <DropdownMenuCheckboxItem
            key={feature}
            checked={selectedFeatures.includes(feature)}
            onCheckedChange={() => handleFeatureChange(feature)}
          >
            {feature}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FeatureFilter;
