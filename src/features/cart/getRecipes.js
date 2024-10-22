import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllRecipes } from "../../services/apiSupabase";

export function GetRecipes() {
  const { id } = useParams();
  const { isPending, data } = useQuery({
    queryFn: () => getAllRecipes(id),
    queryKey: ["recipes"],
  });
  return { isPending, data };
}
