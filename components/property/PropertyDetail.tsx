// components/property/PropertyDetail.tsx
interface PropertyDetailProps {
  property: {
    id: number | string;
    title: string;
    description: string;
    price: number;
    location: string;
    image: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-80 object-cover rounded-lg shadow-md"
      />
      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-lg text-gray-700 mt-2">{property.description}</p>
      <p className="text-xl font-semibold text-green-600 mt-4">
        ${property.price.toLocaleString()}
      </p>
      <p className="text-gray-500 mt-2">{property.location}</p>
    </div>
  );
}
