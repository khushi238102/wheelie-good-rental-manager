
import { Button } from "@/components/ui/button";
import { ReservationTable } from "@/components/reservations/ReservationTable";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const Reservations = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reservations</h1>
          <p className="text-muted-foreground">
            View and manage reservations
          </p>
        </div>
        <Button asChild>
          <Link to="/reservations/new">
            <Plus className="mr-2 h-4 w-4" />
            New Reservation
          </Link>
        </Button>
      </div>
      
      <ReservationTable />
    </div>
  );
};

export default Reservations;
