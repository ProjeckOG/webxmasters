import { Card, CardHeader, CardTitle, CardContent } from "@/lib/@/components/ui/card";
import Link from "next/link";

interface NewsPostCardProps {
  id: number;
  title: string;
  description?: string;
  image: string;
  date: string;
  category: string;
  author: string;
  showDescription?: boolean;
}

const BlogPostCard: React.FC<NewsPostCardProps> = ({ id, title, description, image, date, category, author, showDescription = false }) => {
  return (
    <Card className="h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-auto"
      />
      <CardHeader className="px-4 py-2">
        <p className="text-sm text-gray-500">{date} | {category} | {author}</p>
        <CardTitle className="text-xl"><Link href={`/blog/${id}`}>{title}</Link></CardTitle>
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
