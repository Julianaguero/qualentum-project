import Products from "../components/Shop/Products"
import DiscountBanner from "../components/Shop/DiscountBanner"
import "./Shop.css"
import { useSearch, useThemeContext } from "../hooks";


export default function Shop() {
  const { theme } = useThemeContext();

  const { filteredProducts } = useSearch();

    
  return (
    <main id="shop" className={`${theme}`}>
        <DiscountBanner />
        <Products products={filteredProducts} />

    </main>
  )
}
