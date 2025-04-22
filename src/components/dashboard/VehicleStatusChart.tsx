
import { vehicles } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export function VehicleStatusChart() {
  const statuses = vehicles.reduce((acc, vehicle) => {
    const status = vehicle.status;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(statuses).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = {
    Available: "#10b981",  // Green
    Rented: "#3b82f6",     // Blue
    Maintenance: "#f59e0b", // Yellow
    Unavailable: "#ef4444", // Red
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vehicle Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[entry.name as keyof typeof COLORS] || "#9CA3AF"} 
                  />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} vehicles`, ""]}
                contentStyle={{ borderRadius: '0.5rem' }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
