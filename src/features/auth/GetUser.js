import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiSupabase";

export function GetUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return {
    user,
    isPending,
    isAuth: user?.user?.role === "authenticated",
    username: user?.Users[0]?.username,
    icon: user?.Users[0]?.icon,
    adress: user?.Users[0]?.adress,
    id: user?.Users[0]?.id,
    Users: user?.Users,
  };
}
