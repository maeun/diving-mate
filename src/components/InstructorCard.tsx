import { User, Star, MapPin, Award, Heart } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import defaultDiverImg from "../default_img/default_img_diver.png";

interface InstructorCardProps {
  instructor: {
    id: string;
    name: string;
    avatar?: string;
    location: string;
    rating: number;
    reviewCount: number;
    certification: string;
    experience: number;
    specialties: string[];
    price: {
      min: number;
      max: number;
    };
    isFavorited?: boolean;
  };
  onFavorite?: (id: string) => void;
  onViewProfile?: (id: string) => void;
}

export function InstructorCard({
  instructor,
  onFavorite,
  onViewProfile,
}: InstructorCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-blue-100">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              {instructor.avatar ? (
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <img
                  src={defaultDiverImg}
                  alt="기본 다이버 이미지"
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">
                {instructor.name}
              </h3>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{instructor.location}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onFavorite?.(instructor.id)}
            className="p-2 rounded-full hover:bg-red-50 transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                instructor.isFavorited
                  ? "text-red-500 fill-red-500"
                  : "text-gray-400 hover:text-red-500"
              }`}
            />
          </button>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="info" className="text-xs">
            <Award className="w-3 h-3 mr-1" />
            {instructor.certification}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {instructor.experience}년 경력
          </Badge>
        </div>

        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="font-semibold text-gray-900">
            {instructor.rating}
          </span>
          <span className="text-sm text-gray-500">
            ({instructor.reviewCount}개 후기)
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">전문 분야:</span>
          </p>
          <div className="flex flex-wrap gap-1">
            {instructor.specialties.slice(0, 3).map((specialty, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {specialty}
              </Badge>
            ))}
            {instructor.specialties.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{instructor.specialties.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">가격:</span>{" "}
            {instructor.price.min.toLocaleString()}원 ~{" "}
            {instructor.price.max.toLocaleString()}원
          </p>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          onClick={() => onViewProfile?.(instructor.id)}
          className="w-full"
          size="sm"
        >
          프로필 보기
        </Button>
      </CardFooter>
    </Card>
  );
}
