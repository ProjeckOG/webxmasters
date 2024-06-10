"use client";
import { useState, useEffect } from "react";
import BlogPostCard from "./blogPostCard";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  author: string;
  content: string;
}

const BlogListings = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetching articles from JSON
    fetch('/api/blog.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const otherArticles = articles.slice(3);

  if (otherArticles.length === 0) {
    return <div>No articles found</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4 mt-20">More Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {otherArticles.map(article => (
          <BlogPostCard
            key={article.id}
            id={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
            date={article.date}
            category={article.category}
            author={article.author}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogListings;
