import { useState } from 'react'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

import productList from "./utils/data.json";
import { type ListOfProducts } from './types';
import './App.css'

function App() {
  const [products] = useState<ListOfProducts>(productList);

  const [ searchTerm, setSearchTerm ] = useState("")

  const filterProducts = (products: ListOfProducts) => {
    return products.filter(product => {
      return product.title.toLowerCase().includes(searchTerm)
    })
  }

  const filteredProducts = filterProducts(products);
 

  return (
    <>
     <Header getSearchTerm={setSearchTerm} />
     <Shop products={filteredProducts}/>
    </>
  )
}

export default App
