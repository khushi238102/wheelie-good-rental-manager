
import { Vehicle } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Available":
        return "car-status-available";
      case "Rented":
        return "car-status-rented";
      case "Maintenance":
        return "car-status-maintenance";
      case "Unavailable":
        return "car-status-unavailable";
      default:
        return "";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video relative">
        <img
          src={vehicle.imageUrl}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover"
        />
        <Badge className={`absolute top-2 right-2 ${getStatusClass(vehicle.status)}`}>
          {vehicle.status}
        </Badge>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-lg font-bold">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3 text-sm">
          <div>
            <p className="text-muted-foreground">License</p>
            <p>{vehicle.licensePlate}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Category</p>
            <p>{vehicle.category}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Daily Rate</p>
            <p>${vehicle.dailyRate}/day</p>
          </div>
          <div>
            <p className="text-muted-foreground">Seats</p>
            <p>{vehicle.seats}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline" size="sm">
          <Link to={`/vehicles/${vehicle.id}`}>View Details</Link>
        </Button>
        <Button asChild size="sm">
          <Link to={`/reservations/new?vehicleId=${vehicle.id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
