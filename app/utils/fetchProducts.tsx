import { promises as fs } from 'fs';

export default async function fetchProducts() {
  const res = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');

  const data = JSON.parse(res);

  return data.products;
}
