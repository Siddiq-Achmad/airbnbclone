import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

interface ListingCardProps {
  id: string;
  images: string[];
  location: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
  isFavorite?: boolean;
}

export function ListingCard({
  id,
  images,
  location,
  distance,
  dates,
  price,
  rating,
  isFavorite = false,
}: ListingCardProps) {
  return (
    <Card className="rounded-xl border-0 group">
      <Link href={`/rooms/${id}`}>
        <CardContent className="p-0">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src={images[0]}
              alt={location}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
            <button className="absolute top-3 right-3 z-10">
              <Heart
                className={`w-6 h-6 ${
                  isFavorite ? "fill-red-500 stroke-red-500" : "stroke-white"
                }`}
              />
            </button>
          </div>
          <div className="pt-3 space-y-1">
            <div className="flex justify-between">
              <h3 className="font-medium">{location}</h3>
              <div className="flex items-center gap-1">
                <span>★</span>
                <span>{rating}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">{distance}</p>
            <p className="text-sm text-gray-500">{dates}</p>
            <p className="font-medium">
              Rp{price.toLocaleString()}{" "}
              <span className="font-normal">night</span>
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
