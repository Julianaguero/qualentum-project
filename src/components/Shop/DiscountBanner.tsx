import { useThemeContext } from '../../hooks/'
import useUserContext from '../../hooks/useUserContext'
import './DiscountBanner.css'

export default function DiscountBanner() {
  const {theme} = useThemeContext()
  const {userData, isLogged} = useUserContext()

  return (
    <div className={`discount-banner__container ${theme}`}>
        {isLogged 
          ? (<p>¡{userData.username}, aprovecha tu 20% de descuento ahora!</p>)
          : (<p>Crea una cuenta para disfrutar de nuestros descuentos</p>)
        }
    </div>
  )
}
