import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addComment } from "../../services/apiSupabase";
// export function useAddComment() {
//   const queryClient = useQueryClient();
//   const { isPending: isCommenting, mutate: addComment } = useMutation({
//     mutationFn: (newComments, id) => updateComments(newComments, id),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["product"],
//       });
//       toast.success("New comment added");
//     },
//     onError: (err) => console.log(err),
//   });
//   return { isCommenting, addComment };
// }
export function useAddComment() {
  const queryClient = useQueryClient();
  const { isPending: isCommenting, mutate: addNewComment } = useMutation({
    mutationFn: (newComment) => addComment(newComment),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });

      toast.success("New comment added");
    },
  });
  return { isCommenting, addNewComment };
}
