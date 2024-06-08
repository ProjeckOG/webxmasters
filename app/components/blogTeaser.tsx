"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/lib/@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/lib/@/components/ui/card";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

const BlogTeaser = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog.json")
      .then((response) => response.json())
      .then((data: BlogPost[]) => {
        setPosts(data.slice(0, 3)); // Get the first 3 blog posts for the teaser
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-6 uppercase">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="border p-4 rounded-lg shadow-sm">
            <CardContent className="flex flex-col gap-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-62 object-cover rounded-lg"
              />
              
              <CardDescription className="flex gap-2 justify-between">
                <p className="font-semibold">{post.author} </p>
                <p className="text-sm text-gray-600">
                  {post.category} | {post.date}
                </p>
              </CardDescription>
              <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
              <Button variant={"outline"} className="mt-4 rounded-full">
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button variant={"outline"} className="rounded-full">
          <Link href="/blog">See All Blog Posts</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogTeaser;
