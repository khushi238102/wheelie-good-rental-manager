
import { getCustomerById, getVehicleById, reservations } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PaymentStatus, ReservationStatus } from "@/types";

export function ReservationTable() {
  const getStatusClass = (status: ReservationStatus) => {
    switch (status) {
      case "Confirmed":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "";
    }
  };

  const getPaymentStatusClass = (status: PaymentStatus) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Refunded":
        return "bg-blue-100 text-blue-800";
      case "Failed":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Vehicle</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Dates</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((reservation) => {
            const vehicle = getVehicleById(reservation.vehicleId);
            const customer = getCustomerById(reservation.customerId);
            
            return (
              <TableRow key={reservation.id}>
                <TableCell className="font-medium">
                  {vehicle ? `${vehicle.year} ${vehicle.make} ${vehicle.model}` : "Unknown Vehicle"}
                </TableCell>
                <TableCell>
                  {customer ? `${customer.firstName} ${customer.lastName}` : "Unknown Customer"}
                </TableCell>
                <TableCell>
                  {format(new Date(reservation.startDate), "MMM d")} - {format(new Date(reservation.endDate), "MMM d")}
                </TableCell>
                <TableCell>${reservation.totalCost}</TableCell>
                <TableCell>
                  <Badge className={getStatusClass(reservation.status)}>
                    {reservation.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={getPaymentStatusClass(reservation.paymentStatus)}>
                    {reservation.paymentStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/reservations/${reservation.id}`}>View</Link>
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
