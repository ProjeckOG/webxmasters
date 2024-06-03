"use client"
import { useState, useEffect } from "react";
import NewsPostCard from "./newsPostCard";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  content: string;
}

const MainNewsPostCard = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetching articles from JSON
    fetch('/api/news.json')
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

  const mainArticle = articles[0];
  const secondaryArticles = articles.slice(1, 3);

  if (!mainArticle || secondaryArticles.length === 0) {
    return <div>No articles found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="md:col-span-2 h-full">
        <NewsPostCard
          title={mainArticle.title}
          description={mainArticle.description}
          image={mainArticle.image}
          date={mainArticle.date}
          category={mainArticle.category}
        />
      </div>
      <div className="flex flex-col space-y-4">
        {secondaryArticles.map(article => (
          <NewsPostCard
            key={article.id}
            title={article.title}
            image={article.image}
            date={article.date}
            category={article.category}
          />
        ))}
      </div>
    </div>
  );
};

export default MainNewsPostCard;
