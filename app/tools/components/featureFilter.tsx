import { Button } from "@/lib/@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import React, { useEffect, useState } from "react";

interface Feature {
  id: string;
  name: string;
}

interface FeatureFilterProps {
  selectedFeatures: string[];
  setSelectedFeatures: React.Dispatch<React.SetStateAction<string[]>>;
}

const FeatureFilter: React.FC<FeatureFilterProps> = ({ selectedFeatures, setSelectedFeatures }) => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    fetch('/api/features.json')
      .then(response => response.json())
      .then(data => setFeatures(data))
      .catch(error => console.error('Failed to fetch features', error));
  }, []);

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
      <DropdownMenuContent className="w-56  overflow-y-auto">
        {features.map(feature => (
          <DropdownMenuCheckboxItem
            key={feature.id}
            checked={selectedFeatures.includes(feature.name)}
            onCheckedChange={() => handleFeatureChange(feature.name)}
          >
            {feature.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FeatureFilter;
