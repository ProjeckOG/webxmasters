import Link from "next/link";
import Image from "next/image";
import { Button } from "@/lib/@/components/ui/button";
interface Tool {
  id: number;
  name: string;
  logo: string;
  link: string;
  fav: boolean;
}

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  link: string;
  tools: Tool[];
}

const projectCardsData: ProjectCardProps[] = [
  {
    id: 1,
    title: "Famemust",
    description: "Social Media Analytics Website.",
    link: "#",
    tools: [
      {
        id: 1,
        name: "NextJS",
        logo: "/next.svg",
        link: "#",
        fav: true,
      },
      {
        id: 2,
        name: "Another Tool",
        logo: "/vercel.svg",
        link: "#",
        fav: false,
      },
    ],
  },
  {
    id: 2,
    title: "Love.bot",
    description: "The Rizzing app generator.",
    link: "#",
    tools: [
      {
        id: 1,
        name: "NextJS",
        logo: "/next.svg",
        link: "#",
        fav: true,
      },
      // Add more tools as needed
    ],
  },
  {
    id: 3,
    title: "Everstudent",
    description: "This is about LMS for people.",
    link: "#",
    tools: [
      {
        id: 1,
        name: "NextJS",
        logo: "/next.svg",
        link: "#",
        fav: true,
      },
      // Add more tools as needed
    ],
  },
];

const ProjectCard = ({ title, description, link }: ProjectCardProps) => (
  <div className=" flex flex-wrap p-5 m-2 ">
    <div className="rounded-lg border text-center p-10">
      <h5 className="text-xl font-bold uppercase mb-2">{title}</h5>
      <p className="mb-4">{description}</p>
      <Link href={link}>
        <Button variant={"outline"} className=" p-3 font-bold rounded-xl hover:bg-accent-color uppercase text-xs mr-0 md:mr-2">
          View Project
        </Button>
      </Link>
      <Link href={link}>
        <Button variant={"outline"} className=" p-3 font-bold rounded-xl hover:bg-accent-color uppercase text-xs">
          Edit Project
        </Button>
      </Link>
    </div>
  </div>
);

const ProjectTiles = () => {
  return (
    <div className="flex justify-around md:flex-nowrap flex-wrap">
      {projectCardsData.map((project) => (
        <ProjectCard
          id={project.id}
          title={project.title}
          description={project.description}
          link={project.link}

          key={project.id} tools={[]}        />
      ))}
    </div>
  );
};

export default ProjectTiles;
