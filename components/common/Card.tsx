import React from "react";
import { CardProps } from "@/types/card";

export const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => (
  <div
    onClick={onClick}
    className="p-4 border rounded shadow-sm cursor-pointer hover:shadow-md transition"
  >
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded" />
    <h3 className="text-lg font-semibold mt-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);
