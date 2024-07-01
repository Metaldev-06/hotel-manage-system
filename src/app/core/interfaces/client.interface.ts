export interface ClientData {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  address: string;
  phone: string;
  dni: string;
  partner: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
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
