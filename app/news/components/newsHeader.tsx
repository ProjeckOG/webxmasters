import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/lib/@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/lib/@/components/ui/carousel";
import * as React from "react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Leading News Story",
    excerpt: "This is the main news today...",
    imageUrl: "/testImages/pexels-kaboompics-6335.jpg",
  },
  {
    id: 2,
    title: "Big Event This Week",
    excerpt: "Don't miss out on this major event...",
    imageUrl: "/testImages/pexels-jeremy-bishop-1260133-20147082.jpg",
  },
  {
    id: 3,
    title: "Innovation in Tech",
    excerpt: "Latest breakthroughs in technology...",
    imageUrl: "/testImages/pexels-mjlo-2872418.jpg",
  },
  {
    id: 4,
    title: "Leading News Story",
    excerpt: "This is the main news today...",
    imageUrl: "/testImages/pexels-kaboompics-6335.jpg",
  },
  {
    id: 5,
    title: "Big Event This Week about JJ dumb new product",
    excerpt: "Don't miss out on this major event...",
    imageUrl: "/testImages/pexels-jeremy-bishop-1260133-20147082.jpg",
  },
  {
    id: 6,
    title: "Innovation in the AI tech Scene!",
    excerpt: "Latest breakthroughs in technology...",
    imageUrl: "/testImages/pexels-mjlo-2872418.jpg",
  },
];

export function NewsHeader() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="flex">
        {posts.slice(0, 3).map((post) => ( // This ensures only the first three posts are shown
          <CarouselItem
            key={post.id}
            className="flex-1 pl-1" // Ensures each item takes equal space
          >
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex p-4">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={700}
                  height={500}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
