import Search from "./Search";
import UserInfo from "./UserInfo";
import { useLogout } from "../features/auth/logout";
import Spinner from "./Spinner";
import { GetUser } from "../features/auth/GetUser";
import { FaArrowAltCircleDown } from "react-icons/fa";

import HeadersButtons from "./HeadersButtons";
import { useState } from "react";
import HeaderButtonSm from "./HeaderButtonSm";

function Header() {
  const { isPending: loading } = GetUser();
  const [isOpen, setIsOpen] = useState(false);
  const { isPending } = useLogout();
  if (isPending || loading) return <Spinner></Spinner>;
  if (isOpen) return <HeaderButtonSm setIsOpen={setIsOpen}></HeaderButtonSm>;

  return (
    <div className="md:tracking-wider font-semibold text-slate-50 p-2 flex items-center justify-between col-span-full bg-raisin-black">
      <div>
        <UserInfo></UserInfo>
      </div>
      <Search></Search>
      <HeadersButtons others="hidden sm:flex"></HeadersButtons>
      <div
        onClick={() => setIsOpen((open) => true)}
        className="block mr-4  sm:hidden   text-2xl "
      >
        <FaArrowAltCircleDown></FaArrowAltCircleDown>
      </div>
    </div>
  );
}

export default Header;
