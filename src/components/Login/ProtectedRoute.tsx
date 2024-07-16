import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { isLogged, authChecked } = useAuthContext();
  const location = useLocation();

  if(!authChecked){
    return null;
}

  return isLogged ? children : <Navigate to={"/login"} state={location} />;
};

export default ProtectedRoute;
