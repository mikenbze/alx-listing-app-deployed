import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side: Booking Form */}
        <BookingForm />

        {/* Right side: Order Summary + Cancellation Policy */}
        <div className="space-y-6">
          <OrderSummary bookingDetails={bookingDetails} />
          <CancellationPolicy />
        </div>
      </div>
    </div>
  );
}
