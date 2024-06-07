import React, { useState } from 'react';
import { CardTitle } from '@/lib/@/components/ui/card';
import { Button } from '@/lib/@/components/ui/button';
import { Heart } from 'lucide-react';

interface ToolHeaderProps {
  name: string;
  imageUrl: string;
}

const ToolHeader: React.FC<ToolHeaderProps> = ({ name, imageUrl }) => {
  const [likes, setLikes] = useState(0);
  const [uses, setUses] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleUse = () => {
    setUses(uses + 1);
  };

  return (
    <div className="flex items-center gap-4">
      <img src={imageUrl} alt={name} className="w-16 h-16 object-contain" />
      <div>
        <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
        <div className="flex space-x-4 mt-2">
          <Button variant="outline" className="rounded-full" onClick={handleLike}>
            <Heart /> 
          </Button>
          <Button variant="outline" className="rounded-full" onClick={handleUse}>
            I Use This 
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToolHeader;
