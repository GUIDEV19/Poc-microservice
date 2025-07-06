export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  document: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  type: 'INDIVIDUAL' | 'COMPANY';
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateClientDto {
  name: string;
  email: string;
  phone?: string;
  document: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  type: 'INDIVIDUAL' | 'COMPANY';
  active: boolean;
}

export interface UpdateClientDto {
  name?: string;
  email?: string;
  phone?: string;
  document?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  type?: 'INDIVIDUAL' | 'COMPANY';
  active?: boolean;
} 