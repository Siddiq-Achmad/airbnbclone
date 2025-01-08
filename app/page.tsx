import { Categories } from "@/components/categories";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ListingCard } from "@/components/listing-card";
import { listings } from "@/data/listingData";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Categories />
      <main className="max-w-screen-2xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              id={listing.id}
              images={listing.images}
              location={listing.location}
              distance={listing.distance}
              dates={listing.dates}
              price={listing.price}
              rating={listing.rating}
              isFavorite={listing.isFavorite}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
