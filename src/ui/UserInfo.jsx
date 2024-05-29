import UserLogo from "./UserLogo";
import { GetUser } from "../features/auth/GetUser";
import Spinner from "./Spinner";

function UserInfo() {
  const { isPending: loading, username } = GetUser();

  if (loading) return <Spinner></Spinner>;

  return (
    <div className="flex md:gap-2 lg:gap-3 items-center">
      <UserLogo></UserLogo>
      <p className="hidden md:block">Welcome, {username}</p>
    </div>
  );
}

export default UserInfo;
