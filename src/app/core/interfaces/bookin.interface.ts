export interface Booking {
  data: BookingData[];
  pagination: Pagination;
}

export interface BookingData {
  id: string;
  checking: Date;
  checkout: Date;
  paid: boolean;
  createdAt: Date;
  updatedAt: Date;
  room: Room;
  client: Client;
  price: Price;
}

export interface Client {
  id: string;
  name: string;
  dni: string;
  address: string;
  phone: string;
  partner: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Price {
  id: number;
  category: string;
  type: string;
  price: number;
  created_at: Date;
  updated_at: Date;
}

export interface Room {
  id: number;
  number: number;
  type: string;
  created_at: Date;
  updated_at: Date;
}

export interface Pagination {
  totalRecords: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  offset: number;
}
