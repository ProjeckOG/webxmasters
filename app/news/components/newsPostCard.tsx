import { Card, CardHeader, CardTitle, CardContent } from "@/lib/@/components/ui/card";

interface NewsPostCardProps {
  title: string;
  description?: string;
  image: string;
  date: string;
  category: string;
}

const NewsPostCard: React.FC<NewsPostCardProps> = ({ title, description, image, date, category }) => {
  return (
    <Card className="h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-auto mb-4"
      />
      <CardHeader>
      <p className="text-sm text-gray-500">{date} | {category}</p>
        <CardTitle className="text-2xl"> {title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description && <p>{description}</p>}
      </CardContent>
    </Card>
  );
};

export default NewsPostCard;
