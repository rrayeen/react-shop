import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiSupabase";
import { useSearchId } from "../../hooks/useSearchId.js";

export function useGetProduct() {
  const id = useSearchId();
  const { data, isPending } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(id),
  });
  return { data, isPending };
}
