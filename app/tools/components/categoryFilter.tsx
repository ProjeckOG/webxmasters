import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from '@radix-ui/react-dropdown-menu';
import React from 'react';

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
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Categories
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 max-h-60 overflow-y-auto">
        {categories.map(category => (
          <DropdownMenuCheckboxItem
            key={category}
            checked={selectedCategories.includes(category)}
            onCheckedChange={() => handleCategoryChange(category)}
            className="flex items-center space-x-2"
          >
            {category}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryFilter;
