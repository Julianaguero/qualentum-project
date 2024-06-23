import { useState } from 'react'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

import productList from "./utils/data.json";
import { type ListOfProducts } from './types';
import './App.css'
import Footer from './components/Footer/Footer';
import useSearch from './hooks/useSearch';

function App() {
  const [products] = useState<ListOfProducts>(productList);

 const {filteredProducts, setSearchTerm } = useSearch({products})
 

  return (
    <>
     <Header getSearchTerm={setSearchTerm} />
     <Shop products={filteredProducts}/>
     <Footer />
    </>
  )
}

export default App
