import { Button } from "@/lib/@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import React, { useEffect, useState } from "react";

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategories, setSelectedCategories }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('/api/categories.json')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Failed to fetch categories', error));
  }, []);

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Categories</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" overflow-y-auto bg-primary-foreground text-center border p-2 mt-2">
        {categories.map(category => (
          <DropdownMenuCheckboxItem
            key={category.id}
            checked={selectedCategories.includes(category.name)}
            onCheckedChange={() => handleCategoryChange(category.name)}
          >
            {category.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryFilter;
