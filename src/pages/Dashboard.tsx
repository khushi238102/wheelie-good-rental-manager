
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentReservations } from "@/components/dashboard/RecentReservations";
import { VehicleStatusChart } from "@/components/dashboard/VehicleStatusChart";
import { dashboardStats, vehicles } from "@/data/mockData";
import { Car, CalendarDays, DollarSign, Users } from "lucide-react";

const Dashboard = () => {
  // Calculate available vehicles percentage
  const availablePercentage = Math.round(
    (dashboardStats.availableVehicles / dashboardStats.totalVehicles) * 100
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your rental business
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Vehicles"
          value={dashboardStats.totalVehicles}
          icon={<Car />}
          description="Vehicles in your fleet"
        />
        <StatCard
          title="Available Vehicles"
          value={`${dashboardStats.availableVehicles} (${availablePercentage}%)`}
          icon={<Car />}
          description="Ready for rental"
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Active Reservations"
          value={dashboardStats.activeReservations}
          icon={<CalendarDays />}
          description="Currently on rent"
        />
        <StatCard
          title="Monthly Revenue"
          value={`$${dashboardStats.monthlyEarnings.toLocaleString()}`}
          icon={<DollarSign />}
          description="For current month"
          trend={{ value: 12, isPositive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <RecentReservations />
        <VehicleStatusChart />
      </div>
    </div>
  );
};

export default Dashboard;
