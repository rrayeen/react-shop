import { useMutation, useQueryClient } from "@tanstack/react-query";
import { singup } from "../../services/apiSupabase";
import toast from "react-hot-toast";

export function useSingUp() {
  const queryClient = useQueryClient();
  const { data, isPending, mutate } = useMutation({
    mutationFn: ({ email, password }) => singup({ email, password }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("singup success");
    },
  });
  return {
    data,
    isPending,
    mutate,
  };
}
