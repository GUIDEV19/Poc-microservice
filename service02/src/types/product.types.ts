export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  sku: string;
  category?: string;
  minimumStock: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductDto {
  name: string;
  description?: string;
  price: number;
  quantity: number;
  sku: string;
  category?: string;
  minimumStock: number;
  active: boolean;
} 