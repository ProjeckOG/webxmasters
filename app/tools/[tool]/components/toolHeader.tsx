// components/ToolHeader.tsx

import React from 'react';
import { CardTitle, CardDescription } from '@/lib/@/components/ui/card';

interface ToolHeaderProps {
  name: string;
  imageUrl: string;
}

const ToolHeader: React.FC<ToolHeaderProps> = ({ name, imageUrl }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={imageUrl} alt={name} className="w-16 h-16" />
      <div>
        <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
      </div>
    </div>
  );
};

export default ToolHeader;
