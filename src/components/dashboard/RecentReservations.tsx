
import { getCustomerById, getVehicleById, reservations } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { ReservationStatus } from "@/types";

export function RecentReservations() {
  // Get the 5 most recent reservations
  const recentReservations = [...reservations]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const getStatusColor = (status: ReservationStatus) => {
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

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Reservations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentReservations.map((reservation) => {
            const vehicle = getVehicleById(reservation.vehicleId);
            const customer = getCustomerById(reservation.customerId);
            
            return (
              <div
                key={reservation.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 rounded-md border"
              >
                <div className="flex-1 min-w-0 mb-2 sm:mb-0">
                  <p className="text-sm font-medium truncate">
                    {vehicle ? `${vehicle.year} ${vehicle.make} ${vehicle.model}` : "Unknown Vehicle"}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {customer ? `${customer.firstName} ${customer.lastName}` : "Unknown Customer"}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <div className="text-xs">
                    <span className="font-medium">
                      {format(new Date(reservation.startDate), "MMM d")} - {format(new Date(reservation.endDate), "MMM d")}
                    </span>
                  </div>
                  <Badge className={getStatusColor(reservation.status)}>{reservation.status}</Badge>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
