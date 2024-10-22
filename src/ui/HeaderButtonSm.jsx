import { FaHistory, FaShoppingCart } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { GetUser } from "../features/auth/GetUser";
import { useLogout } from "../features/auth/logout";
import Button from "./Button";
import Spinner from "./Spinner";

function HeaderButtonSm({ others = "", setIsOpen }) {
  const { LogOut, isPending } = useLogout();
  const { isPending: loading, id } = GetUser();

  if (isPending || loading) return <Spinner></Spinner>;
  return (
    <div className="  z-50 flex flex-col items-center justify-center inset-0 backdrop-blur-sm bg-slate-300/20 absolute">
      <div
        onClick={() => setIsOpen(false)}
        className=" text-raisin-black text-2xl absolute top-8 right-8"
      >
        <IoMdCloseCircle></IoMdCloseCircle>
      </div>
      <div
        className={`flex items-center flex-col justify-between gap-4 ${others}`}
      >
        <Button type="regular">
          <Link
            onClick={() => setIsOpen(false)}
            className="flex justify-between items-center gap-1"
            to={`/history/${id}`}
          >
            History <FaHistory></FaHistory>
          </Link>
        </Button>
        <Button type="regular">
          <Link
            onClick={() => setIsOpen(false)}
            className="flex justify-between items-center gap-1"
            to="/cart"
          >
            Cart <FaShoppingCart></FaShoppingCart>
          </Link>
        </Button>
        <Button
          type="danger"
          others="flex justify-between items-center gap-1"
          onClick={() => LogOut()}
        >
          Logout <HiOutlineLogout />
        </Button>
      </div>
    </div>
  );
}

export default HeaderButtonSm;
