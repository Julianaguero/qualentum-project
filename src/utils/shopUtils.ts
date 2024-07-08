import { type CartItemProps, type ListOfProducts } from "../types"

import productList from "../utils/data.json"

export function priceToLocaleString(price: number) {
    return price.toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
    })
  }


export const sumItems = (cart:  CartItemProps[]): number => {
  return cart.reduce((total, item) => total + item.quantity, 0)
}

export const calcTotalPrice = (cart: CartItemProps[]): number => {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
} 

export const filterProducts = (products: ListOfProducts, searchTerm: string) => {
  return products?.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(searchTerm.trim().toLocaleLowerCase());
  });
};

const idtoString = (products: ListOfProducts) => {
  return products.map(product => {
    return {
      ...product,
      id: product.id.toString()
    }
  })
}

const runToString = idtoString(productList)
console.log(runToString)