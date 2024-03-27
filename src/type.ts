type ProductType = {
  id?: string;
  title: string;
  price: number;
  img: string;
  desc?: string;
  category?: string;
  isPopular: boolean;
};

type CartItemType = {
  id?: string;
  title: string;
  img: string;
  price: number;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
  clearProducts: () => void;
};

type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: string;
};

export type SafeProduct = Omit<ProductType, 'createdAt'> & {
  createdAt?: string;
};
