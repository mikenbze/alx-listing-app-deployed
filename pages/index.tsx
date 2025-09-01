import { useEffect, useState } from "react";
import axios from "axios";

import backgroundImage from "@/assets/hero.jpg";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/property/PropertyCard"; 
import { FILTERS } from "@/constants";

// Define type for a Property
interface Property {
  id: string | number;
  title: string;
  price: number;
  image?: string;
  [key: string]: any; // extra fields allowed
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get<Property[]>("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="h-[70vh] flex flex-col justify-center items-center text-white text-center bg-cover bg-center px-6"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg sm:text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="flex gap-4 justify-center flex-wrap mt-8 px-4">
        {FILTERS.map((filter, index) => (
          <Pill key={index} title={filter} />
        ))}
      </section>

      {/* Listings Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {loading ? (
          <p>Loading properties...</p>
        ) : properties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        )}
      </section>
    </div>
  );
}
