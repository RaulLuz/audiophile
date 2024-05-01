import { promises as fs } from "fs";

export default async function fetchProducts() {
  const res = await fetch('https://audiophile-nu-six.vercel.app/data.json');

  const data = await res.json()

  return data;
}
