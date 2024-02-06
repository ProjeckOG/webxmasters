import { Button } from "@/lib/@/components/ui/button";


interface SkillCardProps {
  id: number;
  name: string;
}

const skillCardsData: SkillCardProps[] = [
  {
    id: 1,
    name: 'HTml',

  },
  {
    id: 2,
    name: 'css',
  },
  {
    id: 3,
    name: 'javascript',
  },
  {
    id: 4,
    name: 'NextJS',
  },
  {
    id: 5,
    name: 'reactjs',
  },
  {
    id: 6,
    name: 'supabase',
  },
  {
    id: 7,
    name: 'typescript',
  },
  {
    id: 8,
    name: 'Vercel',
  },
  {
    id: 9,
    name: 'Google',
  },
  {
    id: 1,
    name: 'HTml',

  },
  {
    id: 2,
    name: 'css',
  },
  {
    id: 3,
    name: 'javascript',
  },
  {
    id: 4,
    name: 'NextJS',
  },
  {
    id: 5,
    name: 'reactjs',
  },
  {
    id: 6,
    name: 'supabase',
  },
  {
    id: 7,
    name: 'typescript',
  },
  {
    id: 8,
    name: 'Vercel',
  },
  {
    id: 9,
    name: 'Google',
  },
  
  
  
];

const SkillCard = ({ name }: SkillCardProps) => (
  <Button variant={"outline"}className="bg-primary-color hover:bg-secondary rounded-lg flex justify-center items-center p-4 m-2">
    <h5 className=" text-xs md:text-lg font-bold uppercase">{name}</h5>
  </Button>

);

const SkillTiles = () => {
  return (
      <div className="flex flex-wrap justify-around mx-auto w-full md:w-3/4">
        {skillCardsData.map((skill) => (
          <SkillCard
          key={skill.id}
            id={skill.id}
            name={skill.name}
                    />
        ))}
      </div>
  );
};

export default SkillTiles;
