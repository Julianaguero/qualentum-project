import { useThemeActions } from "../../hooks";
import "./CustomMessagePage.css"

interface Props {
  title?: string,
  textInfo?: string,
}

const CustomMessagePage : React.FC<Props> = ({title, textInfo}): JSX.Element => {
  const {theme} = useThemeActions()

  return (
    <div id="custom-message-page" className={theme}>
      <h2>{title ? title : "Page Not Found"}</h2>
      <p>{textInfo ? textInfo : "Sorry an unexpected error has ocurred."}</p>
    </div>
  )
}


export default CustomMessagePage;