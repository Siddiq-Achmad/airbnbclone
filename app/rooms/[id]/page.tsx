import { Calendar } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { listings } from "@/data/listingData";

export default async function ListingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const ListingId = (await params).id;
  const listing = listings.find((l) => l.id === ListingId);

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">{listing.title}</h1>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="flex items-center">
              ★ {listing.rating} · {listing.reviews} reviews
            </span>
            <span>·</span>
            <span>{listing.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-8">
          <div className="col-span-2 row-span-2">
            <Image
              src={listing.images[0]}
              alt={listing.title}
              width={900}
              height={600}
              className="rounded-l-xl h-[400px] w-full object-cover"
            />
          </div>
          {listing.images.slice(1).map((image, i) => (
            <Image
              key={i}
              src={image}
              alt={`${listing.title} ${i + 2}`}
              width={300}
              height={300}
              className={`h-[200px] w-full object-cover ${
                i === 1 ? "rounded-tr-xl" : i === 2 ? "rounded-br-xl" : ""
              }`}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-start justify-between pb-6 border-b">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Hosted by {listing.host.name}
                </h2>
                <p className="text-gray-500">{listing.host.joinedDate}</p>
              </div>
              <Avatar className="h-14 w-14">
                <AvatarImage src={listing.host.image} alt={listing.host.name} />
                <AvatarFallback>{listing.host.name[0]}</AvatarFallback>
              </Avatar>
            </div>

            <div className="py-6 border-b">
              <p className="whitespace-pre-line">{listing.description}</p>
            </div>

            <div className="py-6 border-b">
              <h2 className="text-xl font-semibold mb-4">
                What this place offers
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold">
                    Rp{listing.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500">night</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border rounded-tl-lg p-3">
                      <div className="text-xs font-semibold">CHECK-IN</div>
                      <div>Add date</div>
                    </div>
                    <div className="border rounded-tr-lg p-3">
                      <div className="text-xs font-semibold">CHECKOUT</div>
                      <div>Add date</div>
                    </div>
                    <div className="col-span-2 border rounded-b-lg p-3">
                      <div className="text-xs font-semibold">GUESTS</div>
                      <div>1 guest</div>
                    </div>
                  </div>
                  <Button className="w-full">Check availability</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
