// import { useRouteError } from "react-router-dom";
import "./CustomMessagePage.css"

interface Props {
  title?: string,
  textInfo?: string,
}

const CustomMessagePage : React.FC<Props> = ({title, textInfo}): JSX.Element => {
  // const error = useRouteError();
  // console.log(error)

  return (
    <div id="custom-message-page">
      <h2>{title ? title : "Page Not Found"}</h2>
      <p>{textInfo ? textInfo : "Sorry an unexpected error has ocurred."}</p>
    </div>
  )
}


export default CustomMessagePage;