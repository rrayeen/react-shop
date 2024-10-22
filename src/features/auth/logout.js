import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { logout } from "../../services/apiSupabase";

export function useLogout() {
  const queryClient = useQueryClient();
  const { isPending, mutate: LogOut } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("logout");
    },
  });
  return { isPending, LogOut };
}
