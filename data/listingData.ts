export interface Listing {
  id: string;
  title: string;
  images: string[];
  location: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
  isFavorite?: boolean;
  host: {
    name: string;
    image: string;
    isSuperhost: boolean;
    joinedDate: string;
  };
  description: string;
  amenities: string[];
  reviews: number;
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "Villa Kayu A-16 for 4-12 Living",
    images: [
      "/images/r01.avif",
      "/images/r02.avif",
      "/images/r03.avif",
      "/images/r04.avif",
    ],
    location: "Kabupaten Ciamis, Jawa Barat, Indonesia",
    distance: "4,916 kilometers away",
    dates: "Jan 15 - 20",
    price: 850000,
    rating: 5.0,
    isFavorite: true,
    host: {
      name: "Cathy",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: true,
      joinedDate: "Joined in 2015",
    },
    description: "A beautiful villa with amazing views, perfect for a relaxing getaway. Enjoy the serene surroundings and modern amenities.",
    amenities: ["Wifi", "Kitchen", "Free parking", "Pool", "Air conditioning"],
    reviews: 208,
  },
  {
    id: "2",
    title: "Beachfront Paradise",
    images: [
      "/images/p11.avif",
      "/images/p12.avif",
      "/images/p13avif",
    ],
    location: "Bali, Indonesia",
    distance: "4,828 kilometers away",
    dates: "Feb 1 - 6",
    price: 1200000,
    rating: 4.9,
    host: {
      name: "John",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: false,
      joinedDate: "Joined in 2018",
    },
    description: "Experience the ultimate beachfront living in this luxurious villa. Fall asleep to the sound of waves and wake up to stunning ocean views.",
    amenities: ["Beachfront", "Wifi", "Kitchen", "Pool", "Air conditioning"],
    reviews: 156,
  },
  {
    id: "3",
    title: "Jungle Treehouse Retreat",
    images: [
      "/images/p01.avif",
      "/images/p02.avif",
      "/images/p03.avif",
    ],
    location: "Ubud, Bali, Indonesia",
    distance: "4,897 kilometers away",
    dates: "Mar 10 - 15",
    price: 750000,
    rating: 4.8,
    isFavorite: true,
    host: {
      name: "Emma",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: true,
      joinedDate: "Joined in 2016",
    },
    description: "Immerse yourself in nature with this unique treehouse experience. Surrounded by lush jungle, it's the perfect escape for nature lovers.",
    amenities: ["Wifi", "Breakfast", "Yoga classes", "Nature tours", "Air conditioning"],
    reviews: 132,
  },
  {
    id: "4",
    title: "Modern City Apartment",
    images: [
      "/images/r05.avif",
      "/images/r06.avif",
      "/images/r07.avif",
    ],
    location: "Jakarta, Indonesia",
    distance: "4,853 kilometers away",
    dates: "Apr 5 - 10",
    price: 600000,
    rating: 4.7,
    host: {
      name: "Alex",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: false,
      joinedDate: "Joined in 2019",
    },
    description: "Stay in the heart of Jakarta in this sleek, modern apartment. Perfect for business travelers or those wanting to explore the city.",
    amenities: ["Wifi", "Gym", "Workspace", "City view", "Air conditioning"],
    reviews: 98,
  },
  {
    id: "5",
    title: "Mountain Retreat",
    images: [
      "/images/p06.avif",
      "/images/p05.avif",
      "/images/p04.avif",
    ],
    location: "Nusa Penida, Bali, Indonesia",
    distance: "4,901 kilometers away",
    dates: "May 20 - 25",
    price: 900000,
    rating: 4.6,
    host: {
      name: "Sarah",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: true,
      joinedDate: "Joined in 2020",
    },
    description: "Experience the tranquility of nature in this serene mountain retreat. Perfect for nature lovers and outdoor enthusiasts.",
    amenities: ["Wifi", "Breakfast", "Hiking", "Nature tours", "Air conditioning"],
    reviews: 87,
  },
  {
    id: "6",
    title: "Beachfront Villa",
    images: [
      "/images/r13.avif",
      "/images/r12.avif",
      "/images/r11.avif",
    ],
    location: "Bali, Indonesia",
    distance: "4,828 kilometers away",
    dates: "Jun 15 - 20",
    price: 1200000,
    rating: 4.9,
    host: {
      name: "John",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: false,
      joinedDate: "Joined in 2018",
    },
    description: "Experience the ultimate beachfront living in this luxurious villa. Fall asleep to the sound of waves and wake up to stunning ocean views.",
    amenities: ["Beachfront", "Wifi", "Kitchen", "Pool", "Air conditioning"],
    reviews: 156,
  },
  {
    id: "7",
    title: "Jungle Treehouse Retreat",
    images: [
      "/images/r10.avif",
      "/images/r11.avif",
      "/images/r12.avif",
    ],
    location: "Ubud, Bali, Indonesia",
    distance: "4,897 kilometers away",
    dates: "Jul 10 - 15",
    price: 750000,
    rating: 4.8,
    host: {
      name: "Emma",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: true,
      joinedDate: "Joined in 2016",
    },
    description: "Immerse yourself in nature with this unique treehouse experience. Surrounded by lush jungle, it's the perfect escape for nature lovers.",
    amenities: ["Wifi", "Breakfast", "Yoga classes", "Nature tours", "Air conditioning"],
    reviews: 132,
  },
  {
    id: "8",
    title: "Modern City Apartment",
    images: [
      "/images/p13.avif",
      "/images/p11.avif",
      "/images/p10.avif",
    ],
    location: "Jakarta, Indonesia",
    distance: "4,853 kilometers away",
    dates: "Aug 5 - 10",
    price: 600000,
    rating: 4.7,
    host: {
      name: "Alex",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: false,
      joinedDate: "Joined in 2019",
    },
    description: "Stay in the heart of Jakarta in this sleek, modern apartment. Perfect for business travelers or those wanting to explore the city.",
    amenities: ["Wifi", "Gym", "Workspace", "City view", "Air conditioning"],
    reviews: 98,
  },
  {
    id: "9",
    title: "Mountain Retreat",
    images: [
      "/images/p08.avif",
      "/images/p06.avif",
      "/images/p07.avif",
    ],
    location: "Nusa Penida, Bali, Indonesia",
    distance: "4,901 kilometers away",
    dates: "May 20 - 25",
    price: 900000,
    rating: 4.6,
    host: {
      name: "Sarah",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: true,
      joinedDate: "Joined in 2020",
    },
    description: "Experience the tranquility of nature in this serene mountain retreat. Perfect for nature lovers and outdoor enthusiasts.",
    amenities: ["Wifi", "Breakfast", "Hiking", "Nature tours", "Air conditioning"],
    reviews: 87,
  },
  {
    id: "10",
    title: "Beachfront Villa",
    images: [
      "/images/p10.avif",
      "/images/p09.avif",
      "/images/p08.avif",
    ],
    location: "Bali, Indonesia",
    distance: "4,828 kilometers away",
    dates: "Jun 15 - 20",
    price: 1200000,
    rating: 4.9,
    host: {
      name: "John",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: false,
      joinedDate: "Joined in 2018",
    },
    description: "Experience the ultimate beachfront living in this luxurious villa. Fall asleep to the sound of waves and wake up to stunning ocean views.",
    amenities: ["Beachfront", "Wifi", "Kitchen", "Pool", "Air conditioning"],
    reviews: 156,
  },
  {
    id: "11",
    title: "Jungle Treehouse Retreat",
    images: [
      "/images/r02.avif",
      "/images/r04.avif",
      "/images/r03.avif",
    ],
    location: "Ubud, Bali, Indonesia",
    distance: "4,897 kilometers away",
    dates: "Jul 10 - 15",
    price: 750000,
    rating: 4.8,
    host: {
      name: "Emma",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: true,
      joinedDate: "Joined in 2016",
    },
    description: "Immerse yourself in nature with this unique treehouse experience. Surrounded by lush jungle, it's the perfect escape for nature lovers.",
    amenities: ["Wifi", "Breakfast", "Yoga classes", "Nature tours", "Air conditioning"],
    reviews: 132,
  },
  {
    id: "12",
    title: "Modern City Apartment",
    images: [
      "/images/r05.avif",
      "/images/r02.avif",
      "/images/r03.avif",
    ],
    location: "Jakarta, Indonesia",
    distance: "4,853 kilometers away",
    dates: "Aug 5 - 10",
    price: 600000,
    rating: 4.7,
    host: {
      name: "Alex",
      image: "/placeholder.svg?height=100&width=100",
      isSuperhost: false,
      joinedDate: "Joined in 2019",
    },
    description: "Stay in the heart of Jakarta in this sleek, modern apartment. Perfect for business travelers or those wanting to explore the city.",
    amenities: ["Wifi", "Gym", "Workspace", "City view", "Air conditioning"],
    reviews: 98,
  },
];

