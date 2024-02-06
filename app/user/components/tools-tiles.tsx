import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

interface ToolCardProps {
  id: number;
  name: string;
  logo: string;
  link: string;
  fav: boolean;
}

const toolCardsData: ToolCardProps[] = [
  {
    id: 1,
    name: 'NextJS',
    logo: '/next.svg',
    link: '#',
    fav: true
  },
  {
    id: 2,
    name: 'Vercel',
    logo: '/vercel.svg',
    link: '#',
    fav: true
  },
  {
    id: 3,
    name: 'Google',
    logo: '/googlelogo.png',
    link: '#',
    fav: true
  },
  {
    id: 4,
    name: 'NextJS',
    logo: '/next.svg',
    link: '#',
    fav: false
  },
  {
    id: 5,
    name: 'Vercel',
    logo: '/vercel.svg',
    link: '#',
    fav: false
  },
  {
    id: 6,
    name: 'Google',
    logo: '/googlelogo.png',
    link: '#',
    fav: false
  },
  {
    id: 7,
    name: 'NextJS',
    logo: '/next.svg',
    link: '#',
    fav: false
  },
  {
    id: 8,
    name: 'Vercel',
    logo: '/vercel.svg',
    link: '#',
    fav: false
  },
  {
    id: 9,
    name: 'Google',
    logo: '/googlelogo.png',
    link: '#',
    fav: false
  },
  
  
  
];

const ToolCard = ({ name, logo, link, fav }: ToolCardProps) => (
  <div className="bg-primary-color rounded-lg flex justify-between items-center w-36 md:w-56 m-2">
  <div className=" flex items-center p-1">
    <Link href={link}><Image src={logo} width={50} height={30}alt='logo' className="border rounded-3xl mr-2"></Image></Link>
    <h5 className=" text-xs md:text-lg font-bold uppercase mb-2">{name}</h5>
  </div>
  <div className="mr-3">{fav && <Heart />}</div>
  </div>

);

const ToolTiles = () => {
  return (
      <div className="flex flex-wrap mx-auto w-full md:w-3/4 ">
        {toolCardsData.map((tool) => (
          <ToolCard
            key={tool.id}
            name={tool.name}
            logo={tool.logo}
            link={tool.link} id={tool.id}  
            fav={tool.fav}
                    />
        ))}
      </div>
  );
};

export default ToolTiles;
