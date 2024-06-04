"use client"
import React from 'react';
import ActionBar from '../../posts/[id]/components/actionBar';
import CommentsSection from '../../posts/[id]/components/commentSection';
import PostDetail from '../../posts/[id]/components/postDetail';



const post = {
  title: 'Discovering the Hidden Paths',
  content: 'In the early morning mist, I set out on what would become one of the most memorable journeys of my life. Far from the bustling cities, I found myself on the threshold of a world seldom touched by human presence. My destination was not marked on any map; it was discovered through whispers of the wind and the call of the wild.As I ventured into the dense undergrowth, each step took me deeper into the heart of the wilderness. The path, barely visible, was tangled with overgrown roots and framed with towering trees that seemed to touch the sky. With every breath, I inhaled the earthy scent of damp moss and listened to the symphony of chirping birds and rustling leaves. Midway through the trek, I stumbled upon a hidden waterfall, a spectacular cascade of crystal-clear water plunging into a serene pool below. The sight was breathtaking, a hidden gem that had escaped the clutches of modernity. I paused, allowing the soothing sounds of the water to wash over me, etching this hidden sanctuary deep into my memory. Further along, the forest opened up to reveal a panoramic vista of a valley adorned with wildflowers. The colors were vivid against the backdrop of green, a painting brought to life. It was a moment of profound silence and beauty, one that spoke more about the essence of existence than words ever could. As the sun began to dip below the horizon, I made my way back, the shadows of the trees casting long lines across the path. The journey had not just been about discovering hidden paths through the physical landscape, but also about exploring the untrodden paths within myself. In sharing this story, I invite you to seek your own hidden paths. They are out there, waiting to be discovered, in the vastness of the great outdoors and the quiet corners of your soul.',
  author: 'Jane Doe',
  date: 'May 10, 2024',
  imageUrl: '/pexels-pixabay-258510.jpg',
  imageAlt: 'A breathtaking view of an uncharted territory',
};

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
