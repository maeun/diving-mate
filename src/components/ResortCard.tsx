import { Building2, Star, MapPin, Heart, Package } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import defaultResortImg from "../default_img/default_img_resort.png";

interface ResortCardProps {
  resort: {
    id: string;
    name: string;
    logo?: string;
    location: string;
    rating: number;
    reviewCount: number;
    facilities: string[];
    packages: {
      name: string;
      price: number;
    }[];
    isFavorited?: boolean;
  };
  onFavorite?: (id: string) => void;
  onViewProfile?: (id: string) => void;
}

export function ResortCard({
  resort,
  onFavorite,
  onViewProfile,
}: ResortCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-blue-100">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              {resort.logo ? (
                <img
                  src={resort.logo}
                  alt={resort.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              ) : (
                <img
                  src={defaultResortImg}
                  alt="기본 리조트 이미지"
                  className="w-12 h-12 rounded-lg object-cover"
                />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">
                {resort.name}
              </h3>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{resort.location}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onFavorite?.(resort.id)}
            className="p-2 rounded-full hover:bg-red-50 transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                resort.isFavorited
                  ? "text-red-500 fill-red-500"
                  : "text-gray-400 hover:text-red-500"
              }`}
            />
          </button>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="font-semibold text-gray-900">{resort.rating}</span>
          <span className="text-sm text-gray-500">
            ({resort.reviewCount}개 후기)
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">주요 시설:</span>
          </p>
          <div className="flex flex-wrap gap-1">
            {resort.facilities.slice(0, 3).map((facility, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {facility}
              </Badge>
            ))}
            {resort.facilities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{resort.facilities.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">패키지:</span>
          </p>
          <div className="space-y-1">
            {resort.packages.slice(0, 2).map((pkg, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-1">
                  <Package className="w-3 h-3 text-blue-500" />
                  <span className="text-gray-700">{pkg.name}</span>
                </div>
                <span className="font-medium text-gray-900">
                  {pkg.price.toLocaleString()}원
                </span>
              </div>
            ))}
            {resort.packages.length > 2 && (
              <Badge variant="info" className="text-xs">
                +{resort.packages.length - 2}개 더보기
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          onClick={() => onViewProfile?.(resort.id)}
          className="w-full"
          size="sm"
        >
          프로필 보기
        </Button>
      </CardFooter>
    </Card>
  );
}
