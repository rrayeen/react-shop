import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { GetUser } from "../features/auth/GetUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isPending, isAuth, Users } = GetUser();

  useEffect(
    function () {
      if ((!isAuth && !isPending) || !Users?.length) navigate("/login");
    },
    [isAuth, navigate, isPending, Users?.length]
  );
  if (isPending) return <Spinner></Spinner>;

  return children;
}

export default ProtectedRoute;
