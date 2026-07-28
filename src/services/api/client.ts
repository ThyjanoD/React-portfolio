const WORDPRESS_API = import.meta.env.VITE_WORDPRESS_API;
const CUSTOM_API = import.meta.env.VITE_CUSTOM_API;

export async function get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${WORDPRESS_API}${endpoint}`);

    if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
    }

    return response.json();
}

export async function getCustom<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${CUSTOM_API}${endpoint}`);

    if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
    }

    return response.json();
}