import { useMutation } from "@tanstack/react-query";
import { updateProduct } from "../../services/apiSupabase";

export function useUpdateQuantity() {
  const { isPending, mutate } = useMutation({
    mutationFn: ({ id, quantity }) => updateProduct({ id, quantity }),
  });
  return { mutate, isPending };
}
