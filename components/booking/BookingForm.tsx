import React, { useState } from "react";
import axios from "axios";
import { BookingFormProps } from "@/types/booking";

export const BookingForm: React.FC<BookingFormProps> = ({ propertyId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`, {
      propertyId,
      name,
      email,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
        Book Now
      </button>
    </form>
  );
};
