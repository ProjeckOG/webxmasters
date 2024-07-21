import React, { useState } from 'react';
import { CardTitle } from '@/lib/@/components/ui/card';
import { Button } from '@/lib/@/components/ui/button';
import { Heart, Check, ExternalLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/lib/@/components/ui/tooltip';

interface ToolHeaderProps {
  name: string;
  imageUrl: string;
  websiteUrl: string;
  category: string;
}

const ToolHeader: React.FC<ToolHeaderProps> = ({ name, imageUrl, websiteUrl, category }) => {
  const [likes, setLikes] = useState(0);
  const [uses, setUses] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isUsed, setIsUsed] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleUse = () => {
    if (isUsed) {
      setUses(uses - 1);
      setIsUsed(false);
    } else {
      setUses(uses + 1);
      setIsUsed(true);
    }
  };

  return (
    <div className="flex items-center justify-between p-6 bg-card rounded-lg shadow-md">
      <div className="flex items-center gap-6">
        <img src={imageUrl} alt={name} className="w-20 h-20 object-contain rounded-lg" />
        <div>
          <CardTitle className="text-3xl font-bold mb-2">{name}</CardTitle>
          <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-full">{category}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant={isLiked ? "default" : "outline"} 
                size="lg"
                className="rounded-full" 
                onClick={handleLike}
              >
                <Heart className={isLiked ? "fill-current" : ""} /> 
                <span className="ml-2">{likes}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isLiked ? 'Unlike' : 'Like'} this tool</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant={isUsed ? "default" : "outline"} 
                size="lg"
                className="rounded-full" 
                onClick={handleUse}
              >
                <Check className={isUsed ? "text-green-500" : ""} />
                <span className="ml-2">I Use This ({uses})</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isUsed ? 'Remove from' : 'Add to'} your toolkit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full" 
                onClick={() => window.open(websiteUrl, '_blank')}
              >
                <ExternalLink />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Visit website</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ToolHeader;