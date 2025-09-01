import React, { useEffect, useState } from "react";
import axios from "axios";
import { Review, ReviewSectionProps } from "@/types/review";

export const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/reviews?propertyId=${propertyId}`
      );
      setReviews(res.data);
    };
    fetchReviews();
  }, [propertyId]);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul className="space-y-2">
          {reviews.map((review) => (
            <li key={review.id} className="border p-2 rounded">
              <p className="font-semibold">{review.user}</p>
              <p className="text-sm">{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
