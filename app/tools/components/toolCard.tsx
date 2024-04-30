import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/lib/@/components/ui/card";
import React from "react";

const ToolCard = ({ tool }) => {
  return (
    // Use Tailwind CSS to adjust the card width and spacing for different breakpoints
    <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center justify-center">
        <img
          className="w-24 h-24 object-cover rounded-full"
          src={tool.imageUrl}
          alt={`Logo of ${tool.name}`}
        />
        <CardTitle className="text-center text-lg font-bold mt-2">
          {tool.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="mb-2">{tool.description}</CardDescription>
        <div className="flex flex-wrap justify-center gap-1">
          {tool.categories.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-primary-foreground rounded-full px-2 py-1 text-xs font-semibold text-white"
            >
              #{category}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
