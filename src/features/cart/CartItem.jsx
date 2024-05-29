import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantity, increaseQuantity, removeItem } from "./cartSlice";
import { formatCurrency } from "../../services/Helper";
import { LuTrash } from "react-icons/lu";

function CartItem({ item }) {
  const { id, image, name, cartQuantity: quantity, price } = item;
  const dispatch = useDispatch();
  function handleInc() {
    dispatch(increaseQuantity(id));
  }
  function handleDec() {
    dispatch(decreaseQuantity(id));
  }
  function handleRemove() {
    dispatch(removeItem(id));
  }
  const style =
    "flex flex-col tracking-wider justify-center items-center  gap-3";

  return (
    <div className=" border-b-2 last:border-none gap-8   flex items-center justify-between p-12 border-raisin-black ">
      <div className="flex-col sm:flex-row text-raisin-black text-xs gap-9 flex  sm:text-sm items-center md:text-base justify-between">
        <img
          className="rounded w-12 hidden sm:block  md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
          src={image}
          alt={name}
        />
        <p className={style}>
          <span className=" font-semibold">Item Name :</span>
          {name}
        </p>
        <p className={`${style} hidden xl:flex`}>
          <span className=" font-semibold">Quantity :</span> {quantity}
        </p>
        <p className={`${style} hidden lg:flex`}>
          <span className=" font-semibold">Item Price :</span>{" "}
          {formatCurrency(price)}
        </p>
        <p className={style}>
          <span className=" font-semibold">Total Price :</span>{" "}
          {formatCurrency(price * quantity)}
        </p>
      </div>
      <div className="flex items-center gap-8 justify-between">
        <div className="flex items-center justify-between gap-4">
          <Button type="plus" onClick={handleDec}>
            -
          </Button>
          <span>{quantity}</span>
          <Button type="plus" onClick={handleInc}>
            +
          </Button>
        </div>
        <Button
          type="danger"
          others="flex items-center gap-1"
          onClick={handleRemove}
        >
          <span className="hidden xl:block">Delete</span> <LuTrash />
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
