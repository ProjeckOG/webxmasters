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
      <form className='flex justify-center items-center rounded-lg'>
      <Input
        placeholder="Write a comment..."
        value={comment}
        onChange={handleCommentChange}
        className='w-full p-2'
      />
      <Button onClick={submitComment} variant="outline"  className="flex text-xs">
        Post Comment
      </Button>
      </form>
    </div>
  );
};

export default CommentsSection;
