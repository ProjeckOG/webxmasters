// components/ToolDescription.tsx

import { Button } from "@/lib/@/components/ui/button";
import React from "react";

interface ToolDescriptionProps {
  description: string;
  website: string;
}

const ToolDescription: React.FC<ToolDescriptionProps> = ({
  description,
  website,
}) => {
  return (
    <div>
      <p className="text-sm">{description}</p>
      <div className="mt-4">
        <Button variant={"outline"}  className="rounded-full">
          {" "}
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary   hover:underline"
          >
            Visit Official Website
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ToolDescription;
