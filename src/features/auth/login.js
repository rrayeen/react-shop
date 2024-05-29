import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiSupabase";
import toast from "react-hot-toast";

export function GetLogin() {
  const queryClient = useQueryClient();
  const { data, isPending, mutate, isError } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("login success");
    },
  });
  return {
    data,
    isPending,
    mutate,
    isError,
  };
}
