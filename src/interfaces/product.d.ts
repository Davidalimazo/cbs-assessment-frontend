export interface IReview {
  user_id: number;
  comment: string;
  rating: number;
}

export interface IProduct {
  product_id: number; // Changed from 'id' to 'product_id'
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  discount: number;
  availability: boolean;
  brand: string;
  category: string;
  rating: number;
  reviews?: IReview[];
}
