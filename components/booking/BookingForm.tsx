import React, { useState } from "react";
import axios from "axios";
import { BookingFormProps } from "@/types/booking";

export const BookingForm: React.FC<BookingFormProps> = ({ propertyId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/bookings", {
        propertyId,
        name,
        email,
        guests,
      });
      alert("Booking successful!");
    } catch (err) {
      console.error(err);
      alert("Booking failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full border rounded p-2"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        className="w-full border rounded p-2"
        required
      />
      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        placeholder="Number of Guests"
        min={1}
        className="w-full border rounded p-2"
        required
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Book Now
      </button>
    </form>
  );
};
