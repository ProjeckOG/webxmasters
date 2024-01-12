import Link from "next/link";


interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  link: string;
}

const projectCardsData: ProjectCardProps[] = [
  {
    id: 1,
    title: 'Famemust',
    description: 'Social Media Analytics Website.',
    link: '#'
  },
  {
    id: 2,
    title: 'Love.bot',
    description: 'The Rizzing app generator.',
    link: '#'
  },
  {
    id: 3,
    title: 'Everstudent',
    description: 'This is about LMS for people.',
    link: '#'
  },
  
  
  
];

const ProjectCard = ({ title, description, link }: ProjectCardProps) => (
  <div className="bg-primary-color rounded-lg text-center p-5 m-4 w-full md:w-5/12 ">
    <h5 className=" text-xl font-bold uppercase mb-2">{title}</h5>
    <p className=" mb-4">{description}</p>
    <Link href={link} className="border p-3 rounded-xl hover:bg-accent-color uppercase text-xs mr-2">View Project</Link>
    <Link href={link} className="border p-3 rounded-xl hover:bg-accent-color uppercase text-xs ">Edit Project</Link>
  </div>
);

const ProjectTiles = () => {
  return (
      <div className="flex  flex-wrap">
        {projectCardsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link} id={0}          />
        ))}
      </div>
  );
};

export default ProjectTiles;
