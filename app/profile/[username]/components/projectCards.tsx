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
    <Card className="border text-center bg-primary-foreground ">
      <CardContent className="flex flex-wrap gap-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-background border rounded-lg p-3 w-full"
          >
            <p className="text-2xl font-bold  my-3">{project.title}</p>
            <p className="text-sm ">{project.description}</p>
            <div className="flex justify-around mt-4">
              <Button
                variant="outline"
                className="rounded-full bg-background font-bold py-2 px-10"
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
    </Card>
  );
}
