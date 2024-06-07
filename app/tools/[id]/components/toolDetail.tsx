import React from 'react';

interface ToolDetailsProps {
  categories: string[];
  features: string[];
}

const ToolDetails: React.FC<ToolDetailsProps> = ({ categories, features }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">Categories</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {categories.map((category, index) => (
          <span key={index} className="bg-secondary px-2 py-1 rounded text-xs">
            {category}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold mt-4">Features</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {features.map((feature, index) => (
          <span key={index} className="bg-primary-foreground px-2 py-1 rounded text-xs">
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ToolDetails;
