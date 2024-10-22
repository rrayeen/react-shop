import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { singup } from "../../services/apiSupabase";

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
