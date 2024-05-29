import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiSupabase";
import toast from "react-hot-toast";

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
