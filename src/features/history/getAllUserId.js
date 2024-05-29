import { useQuery } from "@tanstack/react-query";
import { getAllUserId } from "../../services/apiSupabase";

export function GetAllUserId() {
  const { data, error, isPending } = useQuery({
    queryKey: ["UserId"],
    queryFn: getAllUserId,
  });
  if (error) throw new Error(error);
  return { data, isPending };
}
