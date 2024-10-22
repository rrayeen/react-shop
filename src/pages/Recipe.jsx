import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { GetRecipes } from "../features/cart/getRecipes";
import { formatCurrency } from "../services/Helper";
import Button from "../ui/Button";
import Empty from "../ui/Empty";
import GoBackButton from "../ui/GoBackButton";
import Spinner from "../ui/Spinner";

function Recipe() {
  // Get the current date
  const navigate = useNavigate();
  const { isPending, data } = GetRecipes();
  if (isPending) return <Spinner></Spinner>;
  const deliverDate = data.at(0).deliveredDay;
  const difference = Math.ceil(
    (new Date(deliverDate) - new Date()) / (60 * 1000 * 60 * 24)
  );

  // Format the date as desired (optional)
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const futureDate = new Date(deliverDate).toLocaleDateString("en-US", options);
  const { items, username, location, totalPrice } = data[0];
  const cart = JSON.parse(items);
  if (cart.length === 0)
    return (
      <>
        <div className="flex items-center justify-between p-4 bg-transparent">
          <GoBackButton></GoBackButton>
          <GoBackButton type="home"></GoBackButton>
        </div>
        <Empty />;
      </>
    );
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-transparent">
        <GoBackButton></GoBackButton>
      </div>
      <div className="flex items-center text-lg  justify-center flex-col">
        <div className="p-16 flex flex-col items-center justify-center gap-4">
          <p>
            Congrats{" "}
            <span className="tracking-wide text-raisin-black font-semibold">
              {username}
            </span>{" "}
            you has been successfelly bought {cart.length} product for{" "}
            <span className="tracking-wide text-raisin-black font-semibold">
              {formatCurrency(totalPrice)}
            </span>
          </p>
          <div>
            {cart.map((el) => (
              <p
                className="font-semibold tracking-widest text-raisin-black "
                key={el.name}
              >
                {el.quantity}x {el.name}
              </p>
            ))}
          </div>
          <p>
            {difference > 1
              ? `Your purchase will be delivered in ${difference} days, by ${futureDate}`
              : difference > 0
              ? `Your purchase will be delivered within 24 hours`
              : "Your purchase Already delivered"}
            , to {location}
          </p>
          <p>Have fun</p>
        </div>
        <Button
          type="back"
          onClick={() => navigate("/")}
          others="flex items-center gap-1"
        >
          <TiArrowBack /> Go back Home
        </Button>
      </div>
    </>
  );
}

export default Recipe;
