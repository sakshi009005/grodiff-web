export interface Products {
    products: Product[];
  }

  export interface Product {
    price: string;
    weight: string;
    imageUrl: string;
    name: string;
    productId: any;
    productSource: string;
    variants: Product[]
  }