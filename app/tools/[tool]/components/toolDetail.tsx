// components/ToolDetails.tsx

import React from 'react';

interface ToolDetailsProps {
  categories: string[];
}

const ToolDetails: React.FC<ToolDetailsProps> = ({ categories }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">Categories</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {categories.map((category, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ToolDetails;
