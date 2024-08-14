export type Author = {
    id: number,
    name: string
}

export type Location = {
    id: number,
    location: string
}

export type Painting = {
    authorId: number;
    created: string;
    id: number;
    imageUrl: string;
    locationId: number;
    name: string;
};