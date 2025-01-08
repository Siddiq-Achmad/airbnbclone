import {
  SailboatIcon as Boat,
  Building2,
  Castle,
  Home,
  Mountain,
  Palmtree,
  Tent,
  Trees,
  Warehouse,
  Waves,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = [
  {
    label: "Tiny homes",
    icon: Home,
  },
  {
    label: "Cabins",
    icon: Warehouse,
  },
  {
    label: "Trending",
    icon: Building2,
  },
  {
    label: "Amazing views",
    icon: Mountain,
  },
  {
    label: "Beach",
    icon: Waves,
  },
  {
    label: "Islands",
    icon: Palmtree,
  },
  {
    label: "Camping",
    icon: Tent,
  },
  {
    label: "Castles",
    icon: Castle,
  },
  {
    label: "Lakes",
    icon: Boat,
  },
  {
    label: "National parks",
    icon: Trees,
  },
];

export function Categories() {
  return (
    <ScrollArea className="w-full border-b">
      <div className="flex items-center gap-6 px-4 py-4 max-w-screen-2xl mx-auto">
        {categories.map((category) => (
          <button
            key={category.label}
            className="flex flex-col items-center gap-2 min-w-fit text-gray-500 hover:text-gray-900 transition-colors"
          >
            <category.icon className="w-6 h-6" />
            <span className="text-xs font-medium whitespace-nowrap">
              {category.label}
            </span>
          </button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="hidden" />
    </ScrollArea>
  );
}
