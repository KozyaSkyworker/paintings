export type Author = {
  id: number,
  name: string
};

export type Location = {
  id: number,
  location: string
};

// можно было бы и в папку к Paintings
export type Painting = {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};