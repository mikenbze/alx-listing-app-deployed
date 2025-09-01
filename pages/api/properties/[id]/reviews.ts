import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // For now, return some mock reviews
  // Later, you can connect this to your database
  const reviews = [
    {
      id: "1",
      author: "Alice",
      rating: 5,
      comment: "Amazing property, very clean!",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      author: "Bob",
      rating: 4,
      comment: "Great location, but a bit noisy.",
      createdAt: new Date().toISOString(),
    },
  ];

  if (req.method === "GET") {
    res.status(200).json(reviews);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
