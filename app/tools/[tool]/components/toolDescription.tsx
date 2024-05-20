// components/ToolDescription.tsx

import React from 'react';

interface ToolDescriptionProps {
  description: string;
}

const ToolDescription: React.FC<ToolDescriptionProps> = ({ description }) => {
  return <p className="text-sm">{description}</p>;
};

export default ToolDescription;
