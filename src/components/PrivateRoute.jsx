import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function PrivateRoute({ children }) {
  const { token } = useContext(UserContext);

  return <div>{token ? <div>{children}</div> : <Navigate to={-1} />}</div>;
}

export default PrivateRoute;
