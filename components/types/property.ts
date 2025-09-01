// types/property.ts
export interface PropertyProps {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  price: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  description?: string;
}
