import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addRecipe } from "../../services/apiSupabase";
import { useDispatch } from "react-redux";
import { resetCart } from "./cartSlice";

export function AddRecipe() {
  const dispatch = useDispatch();
  const {
    isPending: isPaying,
    mutate: CheckOut,
    status,
    variables,
  } = useMutation({
    mutationFn: (recipe) => addRecipe(recipe),

    onSuccess: () => {
      dispatch(resetCart());
      toast.success("Your purchase was successful.");
    },
    onError: (error) => toast.error(error),
  });
  return { isPaying, CheckOut, status, variables };
}
