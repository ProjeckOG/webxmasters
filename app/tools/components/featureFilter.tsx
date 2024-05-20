import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from '@radix-ui/react-dropdown-menu';
import React from 'react';


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
      <DropdownMenuTrigger className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Features
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 max-h-60 overflow-y-auto">
        {features.map(feature => (
          <DropdownMenuCheckboxItem
            key={feature}
            checked={selectedFeatures.includes(feature)}
            onCheckedChange={() => handleFeatureChange(feature)}
            className="flex items-center space-x-2"
          >
            {feature}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FeatureFilter;
