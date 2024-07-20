import { Navigate, useLocation } from "react-router-dom";
import { useAuthActions } from "../../hooks";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { isLogged, authChecked } = useAuthActions();
  const location = useLocation();

  if(!authChecked){
    return null;
}

  return isLogged ? children : <Navigate to={"/login"} state={location} />;
};

export default ProtectedRoute;
