import { useThemeContext } from '../../hooks/useThemeContext'
import './DiscountBanner.css'

export default function DiscountBanner() {
  const {theme} = useThemeContext()

  return (
    <div className={`discount-banner__container ${theme}`}>
        <p>¡20% de descuento para nuevos clientes!</p>
    </div>
  )
}
