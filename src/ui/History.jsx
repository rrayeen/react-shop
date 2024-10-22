import { RiArrowRightUpLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { GetAllHistory } from "../features/history/getAllHistory";
import GoBackButton from "./GoBackButton";
import Spinner from "./Spinner";
import EmptyState from "./EmptyState";

function History() {
  const { id } = useParams();

  const { data: allRecipe, isPending } = GetAllHistory(id);

  if (isPending) return <Spinner />;
  if (!allRecipe.length) return <EmptyState />;

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-transparent">
        <GoBackButton></GoBackButton>
        <GoBackButton type="home"></GoBackButton>
      </div>
      <div className="flex items-start py-16 justify-center w-full  h-full">
        <div className="flex items-center gap-4 justify-between flex-col">
          {allRecipe.map((el, i) => (
            <Link
              className="font-bold flex items-center gap-1 text-lg text-raisin-black tracking-wider"
              key={i}
              to={`/recipe/${el.id}`}
            >
              Purchase N°{i + 1} <RiArrowRightUpLine />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default History;
