import { Button } from "@/lib/@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/lib/@/components/ui/card";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website using React and Tailwind CSS to showcase my work and skills.",
  },
  {
    title: "E-commerce Platform",
    description:
      "Developed a full-featured e-commerce platform with payment gateway integration, providing a seamless shopping experience.",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application using WebSocket for live communication across different channels.",
  },
];

export function ProjectCard() {
  return (
    <Card className="text-center mx-auto md:w-1/2">
      <CardHeader>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-primary-foreground rounded-lg p-3 w-full"
          >
            <p className="text-lg font-bold">{project.title}</p>
            <p className="text-sm ">{project.description}</p>
            <div className="flex justify-around mt-4">
              <Button
                variant="outline"
                className="rounded-full font-bold py-2 px-10"
              >
                View
              </Button>
              <Button
                variant="outline"
                className="rounded-full font-bold py-2 px-10"
              >
                Edit
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className=""></CardFooter>
    </Card>
  );
}
