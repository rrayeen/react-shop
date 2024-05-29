import Spinner from "./Spinner";
import { GetUser } from "../features/auth/GetUser";

function UserLogo() {
  const { isPending: loading, icon } = GetUser();
  if (loading) return <Spinner></Spinner>;

  return (
    <img
      className="  rounded-full h-14 w-14 bg-slate-100 "
      src={icon}
      alt="userAvatar"
    ></img>
  );
}

export default UserLogo;
