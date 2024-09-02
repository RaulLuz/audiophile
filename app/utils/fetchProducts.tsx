import { IProduct } from "../types/products";

export default async function fetchProducts(): Promise<IProduct[]> {
  const res = await fetch('https://raw.githubusercontent.com/RaulLuz/audiophile/master/public/data.json').then(a => a.text());
  const data = JSON.parse(res);

  // Ensure the fetched data is typed correctly
  return data.products as IProduct[];
}