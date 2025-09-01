import { BookingForm } from "@/components/booking/BookingForm";
import { OrderSummary } from "@/components/booking/OrderSummary";
import { CancellationPolicy } from "@/components/booking/CancellationPolicy";

const BookingPage = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <BookingForm />
    <div>
      <OrderSummary />
      <CancellationPolicy />
    </div>
  </div>
);

export default BookingPage;
