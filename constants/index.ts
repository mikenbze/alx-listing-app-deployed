import { PropertyProps } from "@/types/property";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    address: {
      street: "123 Seaside Ave",
      city: "Mombasa",
      country: "Kenya",
    },
    price: 250,
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: "/images/villa-ocean-breeze.jpg",
    description: "A luxurious villa with ocean views."
  },
  {
    id: 2,
    name: "City Apartment",
    address: {
      street: "45 Nairobi Rd",
      city: "Nairobi",
      country: "Kenya",
    },
    price: 120,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: "/images/city-apartment.jpg",
    description: "Modern apartment in the city center."
  },
];
