export interface IProduct {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
}

export interface IProductInCart extends IProduct {
  product: IProduct;
  quantity: number
}

interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Include {
  quantity: number;
  item: string;
}

interface Gallery {
  first: First;
  second: Second;
  third: Third;
}

interface First {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Second {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Third {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Other {
  slug: string;
  name: string;
  image: Image2;
}

interface Image2 {
  mobile: string;
  tablet: string;
  desktop: string;
}
