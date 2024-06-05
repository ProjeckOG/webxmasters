"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ActionBar from '../../posts/[id]/components/actionBar';
import CommentsSection from '../../posts/[id]/components/commentSection';
import PostDetail from '../../posts/[id]/components/postDetail';

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  content: string;
}

const BlogPost = () => {
  const params = useParams();
  const { id } = params;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch('/api/blog.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const postData = data.find((post: Post) => post.id === parseInt(id));
          if (postData) {
            setPost(postData);
          } else {
            setError('Post not found');
          }
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div className="md:w-3/4 mx-auto py-10">
      <PostDetail post={post} />
      <ActionBar likes={123} comments={45} /> {/* Adjust these values as needed */}
      <CommentsSection />
    </div>
  );
};

export default BlogPost;
