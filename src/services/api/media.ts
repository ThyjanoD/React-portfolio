import { get } from "./client";

export interface Media {
    id: number;
    source_url: string;
    alt_text: string;
}

export async function getMedia(id: number): Promise<Media> {
    return get<Media>(`/media/${id}`);
}