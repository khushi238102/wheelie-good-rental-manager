
export type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  category: VehicleCategory;
  status: VehicleStatus;
  imageUrl: string;
  dailyRate: number;
  fuelType: string;
  transmission: string;
  seats: number;
  mileage: number;
  lastMaintenance?: string;
};

export type VehicleCategory = 
  | 'Sedan'
  | 'SUV'
  | 'Truck'
  | 'Van'
  | 'Luxury'
  | 'Economy'
  | 'Compact';

export type VehicleStatus = 
  | 'Available'
  | 'Rented'
  | 'Maintenance'
  | 'Unavailable';

export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  driverLicense: string;
  address: string;
  rentalHistory: Reservation[];
};

export type Reservation = {
  id: string;
  vehicleId: string;
  customerId: string;
  startDate: string;
  endDate: string;
  totalCost: number;
  status: ReservationStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
};

export type ReservationStatus =
  | 'Confirmed'
  | 'Completed'
  | 'Cancelled'
  | 'Pending';

export type PaymentStatus =
  | 'Paid'
  | 'Pending'
  | 'Refunded'
  | 'Failed';

export type DashboardStats = {
  totalVehicles: number;
  availableVehicles: number;
  activeReservations: number;
  pendingReservations: number;
  totalEarnings: number;
  monthlyEarnings: number;
};
