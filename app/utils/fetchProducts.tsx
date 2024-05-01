export default async function fetchProducts() {
  const res = await fetch('https://raw.githubusercontent.com/RaulLuz/audiophile/master/public/data.json?token=GHSAT0AAAAAACREJ7TF5KYWKDCA4UXPAJE2ZRSV5XQ');

  const data = await res.json()

  return data.products;
}
