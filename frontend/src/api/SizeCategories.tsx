
export interface SizeCategory {
  id: number;
  SizeName: string;
  product_count: number;
}

const API_URL = 'http://127.0.0.1:8000/api';

export async function getSizeCategories(): Promise<SizeCategory[]> {
  const response = await fetch(`${API_URL}/sizecategory/`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

