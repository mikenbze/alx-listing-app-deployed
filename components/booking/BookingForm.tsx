import React, { useState } from "react";
import axios from "axios";
import { BookingFormProps } from "@/types/booking";

export const BookingForm: React.FC<BookingFormProps> = ({ propertyId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`, {
      propertyId,
      name,
      email,
      message,
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
      <button type="submit">Book</button>
    </form>
  );
};
