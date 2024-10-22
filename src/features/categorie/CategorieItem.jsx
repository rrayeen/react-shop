import { PiArrowCircleUpRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../services/Helper";
import Button from "../../ui/Button";

function CategorieItem({ item }) {
  const { name, image, price, id, quantity } = item;

  return (
    <div className="grid items-center justify-center rounded-2xl p-4 bg-raisin-light ">
      <h2 className="text-xl font-semibold text-raisin-black tracking-wider p-4 text-center">
        {name}
      </h2>

      <img
        src={image}
        className={`rounded w-full object-cover ${
          quantity || "grayscale "
        }  h-full `}
        alt={name}
      ></img>

      <div className=" flex items-center font-medium tracking-wide text-red-950 justify-between mt-6">
        <h3>{formatCurrency(price)}</h3>
        <Button others="px-2 py-1" type="regular">
          <Link
            className="flex items-center  gap-1"
            to={`/product/${name}?id=${id}`}
          >
            visit this product <PiArrowCircleUpRightBold />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default CategorieItem;
