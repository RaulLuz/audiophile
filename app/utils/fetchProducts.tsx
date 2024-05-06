export default async function fetchProducts() {
  const res = await fetch('https://raw.githubusercontent.com/RaulLuz/audiophile/master/public/data.json').then(a => a.text())

  const data = JSON.parse(res);

  return data.products;
}
