import { Card, CardHeader, CardTitle, CardContent } from "@/lib/@/components/ui/card";
import Link from "next/link";

interface NewsPostCardProps {
  title: string;
  description?: string;
  image: string;
  date: string;
  category: string;
  showDescription?: boolean;
}

const BlogPostCard: React.FC<NewsPostCardProps> = ({ title, description, image, date, category, showDescription = false }) => {
  return (
    <Card className="h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-auto"
      />
      <CardHeader className="px-4 py-2">
        <p className="text-sm text-gray-500">{date} | {category}</p>
        <CardTitle className="text-xl"><Link href={"/blog/id"}>{title}</Link></CardTitle>
      </CardHeader>
      {showDescription && (
        <CardContent className="px-4 py-2">
          {description && <p>{description}</p>}
        </CardContent>
      )}
    </Card>
  );
};

export default BlogPostCard;
