import { FaTrash } from "react-icons/fa";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { GetUser } from "../auth/GetUser";
import { useDeleteComment } from "./deleteComment";

function Comments({ item }) {
  const { isPending: loading, id: userId } = GetUser();

  const { userIcon, userName, userComment, id, userId: commentUserId } = item;
  const { isDeleting, deleteCommentFn } = useDeleteComment();
  function handleDelete() {
    deleteCommentFn(id);
  }

  if (isDeleting || loading) return <Spinner></Spinner>;

  return (
    <div className="border  rounded-3xl ">
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
      <div className=" mr-6 mb-2 flex justify-end   ">
        {commentUserId !== userId || (
          <Button
            type="danger"
            others="flex items-center justify-between gap-1"
            onClick={handleDelete}
          >
            <p className="hidden md:block">Delete</p>
            <FaTrash />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Comments;
