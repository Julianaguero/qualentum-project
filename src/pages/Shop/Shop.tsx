import Products from "../../components/Shop/Products"
import DiscountBanner from "../../components/Shop/DiscountBanner"
import "./Shop.css"
import {  useSearch, useThemeActions } from "../../hooks";
import CustomMessagePage from "../ErrorPage/CustomMessagePage";

export default function Shop() {
  const { theme } = useThemeActions();
  const { filteredProducts, isLoading, isError } = useSearch()

  if(isLoading) return <CustomMessagePage title="Cargando..." textInfo="No desesperes... ya casi estamos 😪"/>
  if(isError) return <CustomMessagePage title="Upps algo no anda bien..." textInfo="No desesperes e intenta nuevamente"/>
    
  return (
    <main id="shop" className={`${theme}`}>
        <DiscountBanner />
        <Products products={filteredProducts} />
    </main>
  )
}
