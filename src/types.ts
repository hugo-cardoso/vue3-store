export type Product = {
  id: number;
  name: string;
  price: number;
}

export type Showcase = {
  name: string;
  items: Product[];
}