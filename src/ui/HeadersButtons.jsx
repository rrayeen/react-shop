import Button from "./Button";
import { Link } from "react-router-dom";
import { FaHistory, FaShoppingCart } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { useLogout } from "../features/auth/logout";
import { GetUser } from "../features/auth/GetUser";
import Spinner from "./Spinner";

function HeadersButtons({ others = "" }) {
  const { LogOut, isPending } = useLogout();
  const { isPending: loading, id } = GetUser();

  if (isPending || loading) return <Spinner></Spinner>;

  return (
    <div className={`flex items-center gap-4 ${others}`}>
      <Button type="regular">
        <Link
          className="flex justify-between items-center gap-1"
          to={`/history/${id}`}
        >
          History <FaHistory></FaHistory>
        </Link>
      </Button>
      <Button type="regular">
        <Link className="flex justify-between items-center gap-1" to="/cart">
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
  );
}

export default HeadersButtons;
