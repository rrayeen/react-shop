import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormError from "../../ui/FormError";
import FormCartError from "../../ui/FormCartError";
import { useNavigate } from "react-router-dom";
import { AddRecipe } from "./addRecipe";
import Spinner from "../../ui/Spinner";
import { GetUser } from "../auth/GetUser";
import { useUpdateQuantity } from "../product/UpdateQuantity";
import { GiConfirmed } from "react-icons/gi";

function CartForm() {
  const { isPending: loading, username, adress, id: userId } = GetUser();

  const { cart } = useSelector((store) => store.cartSlice);
  const id = Math.random().toString(16).slice(2);

  const navigate = useNavigate();
  const { CheckOut, status, variables } = AddRecipe();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: username,
      num: "",
      location: adress,
      cart,
    },
  });
  const totalPrice = cart.reduce(
    (acc, curr) => curr.price * curr.cartQuantity + acc,
    0
  );
  const items = cart.map((el) => {
    return {
      quantity: el.cartQuantity,
      name: el.name,
    };
  });
  const { mutate, isPending } = useUpdateQuantity();
  function submit(data) {
    const deliveredDay = new Date();
    const { fullName, location, num } = data;
    const newRecipe = {
      id,
      userId,
      username: fullName,
      location,
      number: num,
      totalPrice,
      totalItem: cart.length,
      items: JSON.stringify(items),
      deliveredDay: deliveredDay.setDate(deliveredDay.getDate() + 3),
    };

    cart.map((el) =>
      mutate({ id: el.id, quantity: el.quantity - el.cartQuantity })
    );
    CheckOut(newRecipe);
  }

  const inputClass = "px-3 py-2 mt-1 rounded-3xl focus:outline-none ";
  const labelClass = "font-semibold tracking-widest";
  const divClass = "grid gap-2";
  if (status === "pending") return <Spinner></Spinner>;
  if (status === "success") navigate(`/recipe/${variables.id}`);

  if (cart.length === 0) {
    return <FormCartError />;
  }
  if (loading || isPending) return <Spinner></Spinner>;

  return (
    <div className=" m-12 flex items-center h-full w-full justify-center flex-col gap-16 p-20 ">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex items-center h-full justify-center flex-col gap-6"
        action=""
      >
        <div className={divClass}>
          <label htmlFor="fullName" className={labelClass}>
            FullName :
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="FullName"
            className={inputClass}
            {...register("fullName", { required: "FullName is required" })}
          />
          {errors.fullName && (
            <FormError>{errors?.fullName?.message}</FormError>
          )}
        </div>
        <div className={divClass}>
          <label htmlFor="num" className={labelClass}>
            Phone Number :
          </label>
          <input
            placeholder="Phone Number"
            type="number"
            id="num"
            className={inputClass}
            {...register("num", { required: "Phone Number is required" })}
          />
          {errors.num && <FormError>{errors?.num?.message}</FormError>}
        </div>

        <div className={divClass}>
          <label htmlFor="location" className={labelClass}>
            Location :
          </label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            className={inputClass}
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && (
            <FormError>{errors?.location?.message}</FormError>
          )}
        </div>

        <input type="text" id="cart" hidden />
        <Button type="check" others="flex gap-1 items-center">
          <span>Confirm</span>
          <GiConfirmed />
        </Button>
      </form>
      <div className="flex mt-6 items-center  gap-16"></div>
    </div>
  );
}

export default CartForm;
