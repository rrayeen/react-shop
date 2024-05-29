import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteComment } from "../../services/apiSupabase";

export function useDeleteComment() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteCommentFn } = useMutation({
    mutationFn: (id) => deleteComment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
      toast.success("Comment Deleted");
    },
  });
  return { isDeleting, deleteCommentFn };
}
