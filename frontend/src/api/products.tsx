
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  created_at: string;
  stock: number;
   discount: string;

}

const API_URL = 'http://127.0.0.1:8000/api';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products/`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

