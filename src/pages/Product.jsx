import Spinner from "../ui/Spinner";
import Comments from "../features/product/Comments";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCommentForm from "../features/product/CreateCommentForm";
import { useGetProduct } from "../features/product/useGetProduct";

import { useGetComments } from "../features/product/useGetComments";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useSearchId } from "../hooks/useSearchId";
import { formatCurrency } from "../services/Helper";
import { FaRegCommentDots } from "react-icons/fa";
import GoBackButton from "../ui/GoBackButton";

function Product() {
  const dispatch = useDispatch();
  function handleAddToCart(item) {
    dispatch(addToCart(item));
  }
  //comments form
  const [openForm, setOpenForm] = useState(false);
  const id = useSearchId();
  const { data, isPending } = useGetProduct();
  const { allComments: comments, commentLoading } = useGetComments();
  if (isPending || commentLoading) return <Spinner></Spinner>;
  const {
    name,
    //categorie,
    description,
    price,
    quantity,
    image,
  } = data;

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-transparent">
        <GoBackButton></GoBackButton>
        <GoBackButton type="home"></GoBackButton>
      </div>
      <div className="flex flex-col gap-16 p-12 md:p-20">
        <div className="flex gap-24 items-center justify-center flex-col xl:flex-row">
          <img
            className={` rounded-3xl ${quantity || "grayscale "} h-64 w-auto`}
            src={image}
            alt={name}
          ></img>
          <div className="flex flex-col gap-6 xl:mr-9 border-collapse rounded border-slate-500 border-[2px] p-4 sm:p-12">
            <h1 className=" font-semibold text-xl text-center text-slate-900">
              {name}
            </h1>
            <p className="text-md text-wrap leading-relaxed tracking-wide">
              {description}
            </p>
            <div className="flex items-center justify-between">
              <p className="  font-semibold tracking-wide text-red-950">
                {formatCurrency(price)}
              </p>
              {quantity ? (
                <Button type="addCart" onClick={() => handleAddToCart(data)}>
                  Add to cart
                </Button>
              ) : (
                <Button isDisabled={true}>Sold Out</Button>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl col-span-full p-4 bg-raisin-light ">
          <h3>All Comments</h3>
          {comments.length
            ? comments.map((el) => <Comments key={el.id} item={el}></Comments>)
            : ""}
          <div>
            {openForm && (
              <CreateCommentForm id={id} setOpenForm={setOpenForm} />
            )}
          </div>
          <div className=" w-fit self-end mr-6">
            <Button
              type="regular"
              others="flex items-center justify-between gap-1"
              onClick={() => {
                setOpenForm((open) => !open);
              }}
            >
              {openForm ? "Cancel " : `Add Comment `}
              {openForm || <FaRegCommentDots />}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
