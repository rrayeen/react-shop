import { useDispatch, useSelector } from "react-redux";
import CartItem from "../features/cart/CartItem";
import Button from "../ui/Button";

import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { IoBagCheckOutline } from "react-icons/io5";
import { GrClear } from "react-icons/gr";
import Empty from "../ui/Empty";
import GoBackButton from "../ui/GoBackButton";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function moveToCartForm() {
    navigate("/cartform");
  }
  function clearCartShop() {
    dispatch(clearCart());
  }
  const { cart } = useSelector((store) => store.cartSlice);
  if (!cart.length)
    return (
      <>
        <div className="flex items-center justify-between p-4 bg-transparent">
          <GoBackButton></GoBackButton>
          <GoBackButton type="home"></GoBackButton>
        </div>
        <Empty></Empty>;
      </>
    );

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-transparent">
        <GoBackButton></GoBackButton>
        <GoBackButton type="home"></GoBackButton>
      </div>
      <div className="p-6  ">
        {cart.map((el) => (
          <CartItem key={el.id} item={el}></CartItem>
        ))}
        <div className="flex items-center justify-end mr-4 gap-8 mt-6 ">
          {cart.length ? (
            <>
              <Button
                type="danger"
                others="flex gap-1 items-center justify-between"
                onClick={clearCartShop}
              >
                Clear <GrClear />
              </Button>
              <Button
                type="check"
                others="flex gap-1 items-center justify-between"
                onClick={moveToCartForm}
              >
                Check Out <IoBagCheckOutline />
              </Button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
