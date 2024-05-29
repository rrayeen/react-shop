import { useMutation } from "@tanstack/react-query";
import { newUser } from "../../services/apiSupabase";

export function useNewUser() {
  const { isPending, mutate } = useMutation({
    mutationFn: (user) => newUser(user),
  });
  return {
    isPending,
    mutate,
  };
}
