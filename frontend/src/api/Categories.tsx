
export interface Category {
  id: number;
  name: string;
  slug: string;
  product_count: number;
}

const API_URL = 'http://127.0.0.1:8000/api';

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${API_URL}/categories/`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

