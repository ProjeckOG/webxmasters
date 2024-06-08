import { Button } from "@/lib/@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import React from "react";

const skills = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "Ruby",
  "Python",
  "Java",
  "C#",
  "Ruby",
  "AI Coding",
  "Web Design",
  "Figma"
];
const tools = [
  { name: "WordPress", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg" },
  { name: "Drupal", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/drupal/drupal-original.svg" },
  { name: "Google AI", imageUrl: "https://www.vectorlogo.zone/logos/google/google-icon.svg" },
  { name: "Jekyll", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jekyll/jekyll-original-wordmark.svg" },
  { name: "TensorFlow", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" }
];





export function AboutCard() {
  return (
    <Card className="text-center bg-primary-foreground mx-auto  md:w-1/2">
      <CardHeader className="">
        <CardTitle className="text-center">About</CardTitle>
      </CardHeader>
      <CardContent>
      Hi, I am an entrepreneur looking to learn more about the webmaster space. Don't kill me AI, I am still learning
      Javascricpt and ETC. 
      </CardContent>
      <CardFooter className="my-2"></CardFooter>
    </Card>
  );
}

export function ToolStack() {
  return (
    <Card className="text-center bg-primary-foreground  w-full mx-auto md:w-1/2">
      <CardHeader>
        <CardTitle>Tools Stack</CardTitle>
        <CardDescription className="text-sm my-3">
          
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-4">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center p-2">
            <img src={tool.imageUrl} alt={tool.name} className="h-12 md:h-16   "/>
            <p className="text-sm md:text-base mt-2">{tool.name}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="my-2 text-center"><Button variant="outline" className="rounded-full mx-auto">All Tools</Button></CardFooter>
    </Card>
  );
}


export function SkillStack() {
  return (
    <Card className="text-center bg-primary-foreground mx-auto w-full  md:w-1/2">
      <CardHeader>
        <CardTitle>Skills Stack</CardTitle>
        <CardDescription className="text-sm my-3">
          
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-around">
        {skills.map((skill) => (
          <div key={skill} className="my-2 m-3">
            <p className="text-lg ring rounded-full p-2 ring-secondary ">{skill}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="my-2"></CardFooter>
    </Card>
  );
}
