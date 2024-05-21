import { Button } from "@/lib/@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import React from "react";



const categories = [
  "Drag-and-Drop", "Business", "eCommerce", "Templates", "Professional",
  "Portfolio", "CMS", "Open Source", "Customizable", "UI/UX Design",
  "Prototyping", "Creative", "Email Marketing", "Automation", "Campaigns",
  "Design", "Creativity", "CRM", "Marketing", "Sales", "Customer Support",
  "Help Desk", "Collaboration"
];

interface CategoryFilterProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategories, setSelectedCategories }) => {
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Categories</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-60 overflow-y-auto bg-black p-2">
        {categories.map(category => (
          <DropdownMenuCheckboxItem
            key={category}
            checked={selectedCategories.includes(category)}
            onCheckedChange={() => handleCategoryChange(category)}
            
          >
            {category}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryFilter;
