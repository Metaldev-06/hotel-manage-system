export interface Booking {
  data: BookingData[];
  meta: Meta;
}

export interface BookingData {
  id: number;
  attributes: Attribute;
}

export interface Attribute {
  checking: Date;
  checkout: Date;
  num_adults: number;
  num_kids: number;
  paid: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  rooms: Rooms;
  client: Client;
  category: Category;
}

export interface Category {
  data: CategoryData;
}

export interface CategoryData {
  id: number;
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  title: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Client {
  data: ClientData;
}

export interface ClientData {
  id: number;
  attributes: ClientAttributes;
}

export interface ClientAttributes {
  name: string;
  address: string;
  phone: string;
  dni: string;
  partner: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Rooms {
  data: RoomsData[];
}

export interface RoomsData {
  id: number;
  attributes: RoomsAttributes;
}

export interface RoomsAttributes {
  room_number: number;
  type: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
