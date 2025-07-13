"use client";
import { ResortCard } from "./ResortCard";

interface Resort {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  facilities: string[];
  packages: { name: string; price: number }[];
  isFavorited?: boolean;
}

interface FeaturedResortsProps {
  resorts: Resort[];
}

export function FeaturedResorts({ resorts }: FeaturedResortsProps) {
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
      {resorts.map((resort) => (
        <ResortCard
          key={resort.id}
          resort={resort}
          onFavorite={handleFavorite}
          onViewProfile={handleViewProfile}
        />
      ))}
    </div>
  );
}
