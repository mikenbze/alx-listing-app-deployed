// pages/api/bookings.ts
import { NextApiRequest, NextApiResponse } from "next";

let BOOKINGS: any[] = []; // temporary storage

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const booking = req.body;

    if (!booking.firstName || !booking.email || !booking.cardNumber) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    BOOKINGS.push({ id: Date.now(), ...booking });
    return res.status(201).json({ message: "Booking created", booking });
  }

  if (req.method === "GET") {
    return res.status(200).json(BOOKINGS);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
