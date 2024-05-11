// components/CommentsSection.tsx
import { Button } from '@/lib/@/components/ui/button';
import { Input } from '@/lib/@/components/ui/input';
import React, { useState } from 'react';

const CommentsSection = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const submitComment = () => {
    console.log("Comment submitted:", comment);
    // Add logic to post comment
    setComment('');
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-4">Comments</h2>
      <Input
        placeholder="Write a comment..."
        value={comment}
        onChange={handleCommentChange}
      />
      <Button onClick={submitComment} variant="solid" color="primary" className="mt-2">
        Post Comment
      </Button>
      {/* Display comments here */}
    </div>
  );
};

export default CommentsSection;
