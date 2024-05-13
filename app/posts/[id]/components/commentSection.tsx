// components/CommentsSection.tsx
import React, { useState } from "react";
import { Button } from "@/lib/@/components/ui/button";
import { Input } from "@/lib/@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/lib/@/components/ui/avatar";


// Ensure each comment has a 'replies' property initialized to an array
const initialComments = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "/avatars/alice.jpg",
    comment: "Incredible journey! Thanks for sharing.",
    timestamp: "10 minutes ago",
    replies: [
      {
        id: 3,
        name: "John Doe",
        avatar: "/avatars/john.jpg",
        comment: "I totally agree, Alice!",
        timestamp: "5 minutes ago",
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "/avatars/bob.jpg",
    comment: "This makes me want to explore more hidden paths myself!",
    timestamp: "1 hour ago",
    replies: [], // Already correctly defined as an empty array
  },
];

const Comment = ({ comment, onReply }) => {
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState("");

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const submitReply = () => {
    onReply(comment.id, reply);
    setReply("");
    setShowReply(false);
  };

  return (
    <div>
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage src={comment.avatar} alt={comment.name} className="w-10 h-10 rounded-full" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">{comment.name}</p>
          <p className="text-xs text-gray-500">{comment.timestamp}</p>
          <p>{comment.comment}</p>
          <button onClick={() => setShowReply(!showReply)} className="text-xs text-blue-500">Reply</button>
          {showReply && (
            <div className="flex mt-2 space-x-2">
              <Input placeholder="Write a reply..." value={reply} onChange={handleReplyChange} className="flex-1 rounded p-1"/>
              <Button onClick={submitReply} className="flex-none">Send</Button>
            </div>
          )}
        </div>
      </div>
      <div className="ml-12">
        {comment.replies && comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} onReply={onReply} />
        ))}
      </div>
    </div>
  );
};

// Other parts remain unchanged


const CommentsSection = () => {
  const [comments, setComments] = useState(initialComments);

  const addReply = (commentId: number, text: any) => {
    const newComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const reply = {
          id: Date.now(), // Unique ID for the reply
          name: "Current User", // This should be the name of the logged-in user
          avatar: "/avatars/default.jpg", // Default or current user's avatar
          comment: text,
          timestamp: "Just now",
        };
        return { ...comment, replies: [...comment.replies, reply] };
      }
      return comment;
    });
    setComments(newComments);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-4">Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onReply={addReply} />
      ))}
    </div>
  );
};

export default CommentsSection;
