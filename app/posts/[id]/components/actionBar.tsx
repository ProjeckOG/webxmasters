// components/ActionBar.tsx
import React from 'react';
import { Button } from '@/lib/@/components/ui/button';
import { Heart, MessageSquare, Share2 } from 'lucide-react';

const ActionBar = ({ likes, comments }) => {
  return (
    <div className="flex flex-wrap justify-around gap-2 border rounded-lg p-2 bg-primary-foreground my-5">
      <Button variant="ghost"  className="flex items-center space-x-2 rounded-full">
        <Heart className="w-5 h-5" />
        <span>{likes} Likes</span>
      </Button>
      <Button variant="ghost" className="flex items-center space-x-2 rounded-full">
        <MessageSquare className="w-5 h-5" />
        <span>{comments} Comments</span>
      </Button>
      <Button variant="ghost"  className="flex items-center space-x-2 rounded-full">
        <Share2 className="w-5 h-5" />
        <span>Share This Post!</span>
      </Button>
    </div>
  );
};

export default ActionBar;
