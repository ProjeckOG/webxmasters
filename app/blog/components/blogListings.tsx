"use client";
import { useState, useEffect } from "react";
import BlogPostCard from "./blogPostCard";

import { AlertCircle } from 'lucide-react';
import { Button } from "@/lib/@/components/ui/button";
import { Card, CardContent } from "@/lib/@/components/ui/card";
import { Skeleton } from "@/lib/@/components/ui/skeleton";

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
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/blog.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data);
        setFilteredArticles(data.slice(3));
        const uniqueCategories = Array.from(new Set(data.map((article: Article) => article.category)));
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const results = articles.slice(3).filter(article => article.category === selectedCategory);
      setFilteredArticles(results);
    } else {
      setFilteredArticles(articles.slice(3));
    }
  }, [selectedCategory, articles]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <Skeleton className="h-48 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="border-destructive bg-destructive/10">
          <CardContent className="p-6 flex items-center">
            <AlertCircle className="text-destructive mr-2" />
            <span className="text-destructive font-semibold">Error: {error}</span>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (filteredArticles.length === 0 && !selectedCategory) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="border-warning bg-warning/10">
          <CardContent className="p-6 flex items-center">
            <AlertCircle className="text-warning mr-2" />
            <span className="text-warning font-semibold">No articles found</span>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">More Blog Posts</h2>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        <Button
          onClick={() => setSelectedCategory(null)}
          variant={selectedCategory === null ? "default" : "outline"}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>
      {filteredArticles.length === 0 ? (
        <Card className="border-info bg-info/10">
          <CardContent className="p-6 text-center">
            <span className="text-info font-semibold">No articles found in this category.</span>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
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
      )}
    </div>
  );
};

export default BlogListings;