// components/ActionBar.tsx
import React from 'react';
import { Button } from '@/lib/@/components/ui/button';
import { Heart, MessageSquare, Share2 } from 'lucide-react';

const ActionBar = ({ likes, comments }) => {
  return (
    <div className="flex space-x-4 mt-4">
      <Button variant="outline" color="primary" className="flex items-center space-x-2">
        <Heart className="w-5 h-5" />
        <span>{likes} Likes</span>
      </Button>
      <Button variant="outline" color="primary" className="flex items-center space-x-2">
        <MessageSquare className="w-5 h-5" />
        <span>{comments} Comments</span>
      </Button>
      <Button variant="outline" color="primary" className="flex items-center space-x-2">
        <Share2 className="w-5 h-5" />
        <span>Share</span>
      </Button>
    </div>
  );
};

export default ActionBar;
