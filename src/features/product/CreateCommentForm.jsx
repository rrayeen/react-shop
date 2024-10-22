import { useForm } from "react-hook-form";
import Button from "../../ui/Button";

import Spinner from "../../ui/Spinner";
import { GetUser } from "../auth/GetUser";
import { useAddComment } from "./addComment";
import removeExtraSpaces from "../../hooks/removeExtraSpaces";

function CreateCommentForm({ id, setOpenForm }) {
  const { isPending, username, icon, id: userId } = GetUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { area: "" },
  });
  const { isCommenting, addNewComment } = useAddComment();
  function submit(data) {
    const newComment = {
      productId: id,
      userIcon: icon,
      userName: username,
      userComment: removeExtraSpaces(data.area),
      userId,
    };
    addNewComment(newComment, {
      onSuccess: () => {
        reset();
        setOpenForm(false);
      },
    });
  }
  if (isPending) return <Spinner></Spinner>;
  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex border p-10 rounded-3xl border-slate-950 gap-3 flex-col"
      >
        <textarea
          className="h-24 p-4 focus:outline-none rounded-3xl"
          placeholder="Add new comment"
          id="area"
          disabled={isCommenting}
          {...register("area", {
            required: "this field must be true",
            validate: (value) =>
              removeExtraSpaces(value).length > 10 || "comment must be >10",
          })}
        ></textarea>
        {errors.area && (
          <p className="py-2 px-4 bg-red-300 w-fit text-red-600 rounded-2xl ">
            {errors?.area?.message}
          </p>
        )}

        <Button type="regular" others="w-fit ml-1" isDisabled={isCommenting}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default CreateCommentForm;
