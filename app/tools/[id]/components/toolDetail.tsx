import React from 'react';
import { Badge } from "@/lib/@/components/ui/badge";
import { Card, CardContent } from "@/lib/@/components/ui/card";
import { Tag, Zap } from 'lucide-react';

interface ToolDetailsProps {
  categories: string[];
  features: string[];
}

const ToolDetails: React.FC<ToolDetailsProps> = ({ categories, features }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <Tag className="mr-2 h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Categories</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <Zap className="mr-2 h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ToolDetails;