import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../services/apiSupabase";
import { useSearchId } from "../../hooks/useSearchId.js";
export function useGetComments() {
  const id = useSearchId();
  const { data: allComments, isPending: commentLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: () => getComments(id),
  });
  return { allComments, commentLoading };
}
