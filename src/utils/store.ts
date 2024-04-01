import { ActionTypes, CartType } from '@/type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,

      addToCart(item) {
        const products = get().products;
        const existingProduct = products.find(
          (product) => product.id === item.id
        );

        if (existingProduct) {
          const updatedProducts = products.map((product) =>
            product.id === existingProduct.id
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                  price: item.price + product.price,
                }
              : item
          );

          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        } else {
          set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        }
      },

      incrementQuantity: (productId: string | undefined) => {
        set((state) => {
          const products = state.products.map((product) => {
            if (product.id === productId) {
              const newQuantity = product.quantity + 1;
              const newPrice = (product.price / product.quantity) * newQuantity;
              return {
                ...product,
                quantity: newQuantity,
                price: newPrice,
              };
            }
            return product;
          });

          const newTotalPrice = products.reduce(
            (total, product) => total + product.price,
            0
          );

          return {
            ...state,
            products,
            totalItems: state.totalItems + 1,
            totalPrice: newTotalPrice,
          };
        });
      },
      decrementQuantity: (productId: string | undefined) => {
        set((state) => {
          const products = state.products.map((product) => {
            if (product.id === productId && product.quantity > 1) {
              const newQuantity = product.quantity - 1;
              const newPrice = (product.price / product.quantity) * newQuantity;
              return {
                ...product,
                quantity: newQuantity,
                price: newPrice,
              };
            }
            return product;
          });

          const newTotalPrice = products.reduce(
            (total, product) => total + product.price,
            0
          );

          return {
            ...state,
            products,
            totalItems: state.totalItems > 0 ? state.totalItems - 1 : 0,
            totalPrice: newTotalPrice,
          };
        });
      },
      removeFromCart(item) {
        set((state) => ({
          products: state.products.filter((product) => product.id !== item.id),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price,
        }));
      },
      clearProducts: () => {
        set({
          products: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },
    }),
    { name: 'cart', skipHydration: true }
  )
);
