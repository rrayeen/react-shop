import { useQuery } from "@tanstack/react-query";
import { getHistory } from "../../services/apiSupabase";

export function GetAllHistory(id) {
  const { data, isPending } = useQuery({
    queryKey: ["history"],
    queryFn: () => getHistory(id),
  });
  return { data, isPending };
}
