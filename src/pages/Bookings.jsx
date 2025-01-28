import Heading from "../ui/Heading";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
function Bookings() {
  return (
    <>
      <Heading as="h1">All bookings</Heading>
      <BookingTableOperations />
      <BookingTable />
    </>
  );
}

export default Bookings;
