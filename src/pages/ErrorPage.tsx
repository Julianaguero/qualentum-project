// import { useRouteError } from "react-router-dom";
import "./ErrorPage.css"

const ErrorPage = (): JSX.Element => {
  // const error = useRouteError();
  // console.log(error)

  return (
    <div id="error-page">
      <h2>Page Not Found</h2>
      <p>Sorry an unexpected error has ocurred.</p>
      {/* {typeof error === "string" && <p>
        <i>{error}</i>
      </p>} */}
    </div>
  )
}


export default ErrorPage;