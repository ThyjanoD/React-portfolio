const BASE_URL = import.meta.env.VITE_WORDPRESS_API;

export async function get<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  return response.json();
}