import Link from "next/link";
import Image from "next/image";
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

const ProjectCard = ({ title, description, link, tools }: ProjectCardProps) => (
  <div className="bg-primary-color flex flex-wrap rounded-lg items-center  justify-between p-5 m-4 ">
    <div className="">
      <h5 className="text-xl font-bold uppercase mb-2">{title}</h5>
      <p className="mb-4">{description}</p>
      <Link href={link}>
        <button className="border p-3 font-bold rounded-xl hover:bg-accent-color uppercase text-xs mr-2">
          View Project
        </button>
      </Link>
      <Link href={link}>
        <button className="border p-3 font-bold rounded-xl hover:bg-accent-color uppercase text-xs">
          Edit Project
        </button>
      </Link>
    </div>
    <div className="flex items-center mt-5 w-full">
      <h5 className="uppercase mr-1 md:mr-5">Tool Stack:</h5>
      {tools.map((tool) => (
        <div key={tool.id} className="mr-2 w-full max-w-xs">
          <Image src={tool.logo} width={50} height={50} alt={tool.name}  />
        </div>
      ))}
    </div>
  </div>
);

const ProjectTiles = () => {
  return (
    <div className="flex md:flex-nowrap flex-wrap">
      {projectCardsData.map((project) => (
        <ProjectCard
          id={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
          tools={project.tools}
          key={project.id}
        />
      ))}
    </div>
  );
};

export default ProjectTiles;
