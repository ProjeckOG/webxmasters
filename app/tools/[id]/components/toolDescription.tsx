import React from "react";
import { Button } from "@/lib/@/components/ui/button";
import { Card, CardContent } from "@/lib/@/components/ui/card";
import { ExternalLink, Info } from 'lucide-react';

interface ToolDescriptionProps {
  description: string;
  website: string;
}

const ToolDescription: React.FC<ToolDescriptionProps> = ({
  description,
  website,
}) => {
  return (
    <Card className="bg-secondary/30">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Info className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
          <div className="space-y-4 flex-grow">
            <p className="text-base leading-relaxed">{description}</p>
            <Button 
              variant="outline" 
              className="rounded-full transition-all hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open(website, '_blank', 'noopener,noreferrer')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Official Website
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolDescription;