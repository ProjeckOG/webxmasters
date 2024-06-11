import { Button } from "@/lib/@/components/ui/button";
import {  ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function addAJob() {
  return (
    <div className="bg-primary text-primary-foreground p-6 rounded-lg  flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-2">Hiring? Post a Job!</h2>
      <p className="text-md mb-4">
        Join our community of employers and post your job openings. Reach
        qualified professionals and find the perfect candidate for your team.
      </p>
      <Button
        variant="outline"
        className="rounded-full bg-primary-foreground text-primary flex items-center"
      >
        <Link href="/jobs/add" className="flex items-center gap-2">
          Add a Job!
          <ArrowRight className="w-5 h-5" />
        </Link>
      </Button>
    </div>
  );
}
