import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default RequireAuth;
