"use client";
import { InstructorCard } from "./InstructorCard";

interface Instructor {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  certification: string;
  experience: number;
  specialties: string[];
  price: { min: number; max: number };
  isFavorited?: boolean;
}

interface FeaturedInstructorsProps {
  instructors: Instructor[];
}

export function FeaturedInstructors({ instructors }: FeaturedInstructorsProps) {
  const handleFavorite = (id: string) => {
    console.log("Favorite toggled:", id);
    // TODO: Implement favorite functionality
  };
  const handleViewProfile = (id: string) => {
    console.log("View profile:", id);
    // TODO: Navigate to profile page
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {instructors.map((instructor) => (
        <InstructorCard
          key={instructor.id}
          instructor={instructor}
          onFavorite={handleFavorite}
          onViewProfile={handleViewProfile}
        />
      ))}
    </div>
  );
}
