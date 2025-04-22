
import { Customer, DashboardStats, Reservation, Vehicle } from "@/types";

// Sample Vehicles
export const vehicles: Vehicle[] = [
  {
    id: "v1",
    make: "Toyota",
    model: "Camry",
    year: 2023,
    licensePlate: "ABC-1234",
    category: "Sedan",
    status: "Available",
    imageUrl: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2936&auto=format&fit=crop",
    dailyRate: 60,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seats: 5,
    mileage: 1500,
    lastMaintenance: "2023-12-15"
  },
  {
    id: "v2",
    make: "Honda",
    model: "CR-V",
    year: 2022,
    licensePlate: "DEF-5678",
    category: "SUV",
    status: "Rented",
    imageUrl: "https://images.unsplash.com/photo-1606664913060-112188c69e11?q=80&w=2940&auto=format&fit=crop",
    dailyRate: 75,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seats: 5,
    mileage: 8000,
    lastMaintenance: "2023-11-10"
  },
  {
    id: "v3",
    make: "Ford",
    model: "F-150",
    year: 2021,
    licensePlate: "GHI-9012",
    category: "Truck",
    status: "Maintenance",
    imageUrl: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?q=80&w=2833&auto=format&fit=crop",
    dailyRate: 85,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seats: 5,
    mileage: 15000,
    lastMaintenance: "2024-01-05"
  },
  {
    id: "v4",
    make: "Mercedes-Benz",
    model: "E-Class",
    year: 2023,
    licensePlate: "JKL-3456",
    category: "Luxury",
    status: "Available",
    imageUrl: "https://images.unsplash.com/photo-1563720223185-11242102c366?q=80&w=2787&auto=format&fit=crop",
    dailyRate: 120,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seats: 5,
    mileage: 3000,
    lastMaintenance: "2023-12-20"
  },
  {
    id: "v5",
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    licensePlate: "MNO-7890",
    category: "Economy",
    status: "Available",
    imageUrl: "https://images.unsplash.com/photo-1590510603060-ee5b5211096a?q=80&w=2787&auto=format&fit=crop",
    dailyRate: 50,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seats: 5,
    mileage: 10000,
    lastMaintenance: "2023-10-15"
  },
  {
    id: "v6",
    make: "Chevrolet",
    model: "Suburban",
    year: 2021,
    licensePlate: "PQR-1234",
    category: "SUV",
    status: "Available",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2940&auto=format&fit=crop",
    dailyRate: 95,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seats: 8,
    mileage: 22000,
    lastMaintenance: "2023-09-28"
  }
];

// Sample Customers
export const customers: Customer[] = [
  {
    id: "c1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
    driverLicense: "DL12345678",
    address: "123 Main St, Anytown, USA",
    rentalHistory: []
  },
  {
    id: "c2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "555-987-6543",
    driverLicense: "DL87654321",
    address: "456 Oak Ave, Somewhere, USA",
    rentalHistory: []
  },
  {
    id: "c3",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    phone: "555-456-7890",
    driverLicense: "DL45678901",
    address: "789 Pine Rd, Elsewhere, USA",
    rentalHistory: []
  }
];

// Sample Reservations
export const reservations: Reservation[] = [
  {
    id: "r1",
    vehicleId: "v2",
    customerId: "c1",
    startDate: "2024-04-21",
    endDate: "2024-04-25",
    totalCost: 300,
    status: "Confirmed",
    paymentStatus: "Paid",
    createdAt: "2024-04-15"
  },
  {
    id: "r2",
    vehicleId: "v3",
    customerId: "c2",
    startDate: "2024-04-18",
    endDate: "2024-04-20",
    totalCost: 170,
    status: "Completed",
    paymentStatus: "Paid",
    createdAt: "2024-04-10"
  },
  {
    id: "r3",
    vehicleId: "v1",
    customerId: "c3",
    startDate: "2024-04-25",
    endDate: "2024-04-28",
    totalCost: 180,
    status: "Pending",
    paymentStatus: "Pending",
    createdAt: "2024-04-20"
  },
  {
    id: "r4",
    vehicleId: "v4",
    customerId: "c1",
    startDate: "2024-05-01",
    endDate: "2024-05-05",
    totalCost: 480,
    status: "Confirmed",
    paymentStatus: "Paid",
    createdAt: "2024-04-22"
  }
];

// Dashboard Stats
export const dashboardStats: DashboardStats = {
  totalVehicles: vehicles.length,
  availableVehicles: vehicles.filter(v => v.status === "Available").length,
  activeReservations: reservations.filter(r => r.status === "Confirmed").length,
  pendingReservations: reservations.filter(r => r.status === "Pending").length,
  totalEarnings: reservations.reduce((sum, res) => sum + res.totalCost, 0),
  monthlyEarnings: 3200,
};

// Function to get vehicle by ID
export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};

// Function to get customer by ID
export const getCustomerById = (id: string): Customer | undefined => {
  return customers.find(customer => customer.id === id);
};

// Function to get reservation by ID
export const getReservationById = (id: string): Reservation | undefined => {
  return reservations.find(reservation => reservation.id === id);
};
