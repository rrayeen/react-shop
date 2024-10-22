import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login } from "../../services/apiSupabase";

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
