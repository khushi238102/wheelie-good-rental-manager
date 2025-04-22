
import { Button } from "@/components/ui/button";
import { CustomerTable } from "@/components/customers/CustomerTable";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const Customers = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">
            View and manage customer information
          </p>
        </div>
        <Button asChild>
          <Link to="/customers/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Customer
          </Link>
        </Button>
      </div>
      
      <CustomerTable />
    </div>
  );
};

export default Customers;
