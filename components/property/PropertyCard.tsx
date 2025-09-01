import axios from "axios";
import { useEffect, useState } from "react";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
}

const PropertyCard = ({ propertyId }: { propertyId: string }) => {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${propertyId}`
        );
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property:", err);
        setError("Failed to load property.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  if (loading) return <p>Loading property...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="border p-4 rounded shadow">
      <img
        src={property?.imageUrl}
        alt={property?.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{property?.title}</h3>
      <p>{property?.location}</p>
      <p className="font-semibold">${property?.price}/night</p>
    </div>
  );
};

export default PropertyCard;
