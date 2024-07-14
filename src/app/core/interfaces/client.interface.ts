export interface Client {
  data: ClientData[];
  pagination: Pagination;
}

export interface ClientData {
  id: string;
  name: string;
  dni: string;
  address: string;
  phone: string;
  partner: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Pagination {
  totalRecords: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  offset: number;
}
