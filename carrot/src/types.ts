export type Product = {
  id: number;
  images: string[];
  title: string;
  category: string;
  time: string;
  price: string;
  description: string;
  views: number;
  seller: {
    name: string;
    location: string;
  };
  isSold: boolean;
};
