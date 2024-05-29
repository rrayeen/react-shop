import { useQuery } from "@tanstack/react-query";
import { getAllRecipes } from "../../services/apiSupabase";
import { useParams } from "react-router-dom";

export function GetRecipes() {
  const { id } = useParams();
  const { isPending, data } = useQuery({
    queryFn: () => getAllRecipes(id),
    queryKey: ["recipes"],
  });
  return { isPending, data };
}
