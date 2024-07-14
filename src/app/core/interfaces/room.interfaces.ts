export interface Room {
  data: RoomData[];
  pagination: Pagination;
}

export interface RoomData {
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
