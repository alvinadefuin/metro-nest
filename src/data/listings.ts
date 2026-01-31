// Centralized listings data
export interface Listing {
  id: number;
  title: string;
  location: string;
  area: string;
  price: string;
  period: string;
  beds: string;
  baths: number;
  sqm: string;
  image: string;
  images: string[];
  tag?: string;
  description: string;
  amenities: string[];
  features: string[];
}

export const listings: Listing[] = [
  {
    id: 1,
    title: "Modern Studio in BGC",
    location: "Bonifacio Global City, Taguig",
    area: "bgc",
    price: "₱25,000",
    period: "/month",
    beds: "Studio",
    baths: 1,
    sqm: "28 sqm",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
    ],
    tag: "Available Now",
    description: "A beautifully designed modern studio unit in the heart of BGC. Features floor-to-ceiling windows with stunning city views, fully furnished with premium appliances, and access to world-class amenities.",
    amenities: ["Pool", "Gym", "24/7 Security", "Parking", "Lobby Lounge"],
    features: ["Fully Furnished", "Air Conditioning", "WiFi Ready", "Balcony"]
  },
  {
    id: 2,
    title: "1BR with Makati Skyline View",
    location: "Salcedo Village, Makati",
    area: "makati",
    price: "₱35,000",
    period: "/month",
    beds: "1 Bed",
    baths: 1,
    sqm: "45 sqm",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
    ],
    tag: "Premium",
    description: "Luxurious 1-bedroom unit in the prestigious Salcedo Village. Wake up to breathtaking Makati skyline views. Walking distance to Greenbelt and Legazpi Sunday Market.",
    amenities: ["Infinity Pool", "Sky Lounge", "Gym", "Concierge", "Function Rooms"],
    features: ["Fully Furnished", "Smart Home Ready", "Walk-in Closet", "City View"]
  },
  {
    id: 3,
    title: "Cozy 2BR near Ortigas CBD",
    location: "Capitol Commons, Pasig",
    area: "ortigas",
    price: "₱40,000",
    period: "/month",
    beds: "2 Beds",
    baths: 1,
    sqm: "56 sqm",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
    ],
    tag: "Pet Friendly",
    description: "Spacious 2-bedroom unit perfect for couples or small families. Located in the vibrant Capitol Commons with easy access to shops, restaurants, and entertainment.",
    amenities: ["Pet Park", "Pool", "Gym", "Playground", "Basketball Court"],
    features: ["Semi-Furnished", "Pet Friendly", "Maids Room", "2 Balconies"]
  },
  {
    id: 4,
    title: "Luxury 2BR in High Street",
    location: "High Street South, BGC",
    area: "bgc",
    price: "₱55,000",
    period: "/month",
    beds: "2 Beds",
    baths: 2,
    sqm: "72 sqm",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
    ],
    tag: "Luxury",
    description: "Premium 2-bedroom unit in the iconic High Street South. Features designer interiors, top-of-the-line appliances, and direct access to BGC's best dining and shopping.",
    amenities: ["Infinity Pool", "Private Gym", "Wine Cellar", "Valet Parking", "Spa"],
    features: ["Fully Furnished", "Designer Interior", "Premium Appliances", "2 Parking Slots"]
  },
  {
    id: 5,
    title: "Budget-Friendly Studio in Mandaluyong",
    location: "Shaw Boulevard, Mandaluyong",
    area: "mandaluyong",
    price: "₱18,000",
    period: "/month",
    beds: "Studio",
    baths: 1,
    sqm: "24 sqm",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
    ],
    tag: "Best Value",
    description: "Affordable studio unit perfect for young professionals. Near MRT Shaw Station with easy access to Ortigas and Makati. Fully furnished and move-in ready.",
    amenities: ["Pool", "Gym", "Laundry Area", "Mini Mart", "Security"],
    features: ["Fully Furnished", "Near MRT", "WiFi Ready", "AC Included"]
  },
  {
    id: 6,
    title: "Executive 1BR in Rockwell",
    location: "Rockwell Center, Makati",
    area: "makati",
    price: "₱45,000",
    period: "/month",
    beds: "1 Bed",
    baths: 1,
    sqm: "52 sqm",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
    ],
    tag: "Premium",
    description: "Elegant 1-bedroom unit in the exclusive Rockwell Center. Enjoy resort-style living with Power Plant Mall at your doorstep. Perfect for executives who value privacy and convenience.",
    amenities: ["Exclusive Pool", "Gym", "Tennis Court", "Jogging Path", "Direct Mall Access"],
    features: ["Fully Furnished", "High Ceilings", "Bathtub", "Storage Room"]
  }
];

export const areas = [
  {
    slug: "bgc",
    name: "BGC",
    fullName: "Bonifacio Global City, Taguig",
    count: 45,
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop",
    description: "Metro Manila's premier business and lifestyle district featuring modern high-rises, international dining, and vibrant nightlife."
  },
  {
    slug: "makati",
    name: "Makati",
    fullName: "Makati City",
    count: 62,
    image: "https://images.unsplash.com/photo-1562601579-599dec564e06?w=400&h=300&fit=crop",
    description: "The country's financial capital offering a perfect blend of business, shopping, and entertainment destinations."
  },
  {
    slug: "ortigas",
    name: "Ortigas",
    fullName: "Ortigas Center, Pasig",
    count: 38,
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop",
    description: "A major business hub with excellent connectivity, shopping centers, and a growing residential community."
  },
  {
    slug: "mandaluyong",
    name: "Mandaluyong",
    fullName: "Mandaluyong City",
    count: 29,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    description: "Strategic location between Makati and Ortigas with affordable options and excellent MRT access."
  }
];

export function getListingsByArea(areaSlug: string): Listing[] {
  return listings.filter(listing => listing.area === areaSlug);
}

export function getListingById(id: number): Listing | undefined {
  return listings.find(listing => listing.id === id);
}

export function getAreaBySlug(slug: string) {
  return areas.find(area => area.slug === slug);
}
