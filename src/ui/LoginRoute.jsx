import { useNavigate } from "react-router-dom";
import { GetUser } from "../features/auth/GetUser";
import { useEffect } from "react";
import Spinner from "./Spinner";

function LoginRoute({ children }) {
  const navigate = useNavigate();
  const { isPending, isAuth, Users } = GetUser();

  useEffect(
    function () {
      if (isAuth && Users.length) navigate("/");
    },
    [isAuth, navigate, isPending, Users]
  );
  if (isPending) return <Spinner></Spinner>;

  return children;
}

export default LoginRoute;
