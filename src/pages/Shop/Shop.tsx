import Products from "../../components/Shop/Products"
import DiscountBanner from "../../components/Shop/DiscountBanner"
import "./Shop.css"
import { useSearch, useThemeContext } from "../../hooks";
import CustomMessagePage from "../ErrorPage/CustomMessagePage";

export default function Shop() {
  const { theme } = useThemeContext();
  const { filteredProducts, isLoading } = useSearch();

  if(isLoading) return <CustomMessagePage title="Cargando..." textInfo="No desesperes... ya casi estamos 😪"/>
    
  return (
    <main id="shop" className={`${theme}`}>
        <DiscountBanner />
        <Products products={filteredProducts} />
    </main>
  )
}
