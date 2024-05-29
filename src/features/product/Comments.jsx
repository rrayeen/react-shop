import Button from "../../ui/Button";
import { useDeleteComment } from "./deleteComment";
import Spinner from "../../ui/Spinner";
import { GetUser } from "../auth/GetUser";
import { FaTrash } from "react-icons/fa";

function Comments({ item }) {
  const { isPending: loading, id: userId } = GetUser();

  const { userIcon, userName, userComment, id, userId: commentUserId } = item;
  const { isDeleting, deleteCommentFn } = useDeleteComment();
  function handleDelete() {
    deleteCommentFn(id);
  }

  if (isDeleting || loading) return <Spinner></Spinner>;

  return (
    <div className="flex items-center border rounded-3xl justify-between">
      <div className="flex gap-3 p-6 flex-col">
        <div className="flex items-center gap-5">
          <img
            className="h-12 w-12 rounded-full"
            src={userIcon}
            alt={userName}
          ></img>
          <h4 className="font-semibold self-start">{userName}</h4>
        </div>
        <p className=" ml-16 row-span-2 col-span-2 ">{userComment}</p>
      </div>
      <div className="mr-24">
        {commentUserId !== userId || (
          <Button
            type="danger"
            others="flex items-center justify-between gap-1"
            onClick={handleDelete}
          >
            Delete <FaTrash />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Comments;
