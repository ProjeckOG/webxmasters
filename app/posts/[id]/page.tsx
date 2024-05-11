"use client"
import React from 'react';
import PostDetail from './components/postDetail';
import ActionBar from './components/actionBar';
import CommentsSection from './components/commentSection';


const post = {
  title: 'Discovering the Hidden Paths',
  content: 'Here is the full story of my adventures exploring uncharted territories...',
  author: 'Jane Doe',
  date: 'May 10, 2024',
  imageUrl: '/pexels-pixabay-258510.jpg',
  imageAlt: 'A breathtaking view of an uncharted territory',
};

<PostDetail post={post} />

// Assuming these are fetched or tracked in state
const postLikes = 123;  // Example number of likes
const postComments = 45;  // Example number of comments


const PostPage = () => {
  return (
    <div className="md:w-3/4 mx-auto py-10">
      <PostDetail post={post} />
      <ActionBar likes={postLikes} comments={postComments} />
      <CommentsSection />
    </div>
  );
};

export default PostPage;
