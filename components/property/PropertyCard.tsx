import React from "react";

interface Property {
  id: string | number;
  title: string;
  description?: string;
  price: number;
  location?: string;
  image?: string;
  [key: string]: any; // allow extra fields
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Property Image */}
      {property.image ? (
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      {/* Property Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{property.title}</h2>
        {property.location && (
          <p className="text-sm text-gray-500 mb-2">{property.location}</p>
        )}
        {property.description && (
          <p className="text-sm text-gray-600 mb-3">{property.description}</p>
        )}
        <p className="text-indigo-600 font-bold">${property.price}</p>
      </div>
    </div>
  );
}
