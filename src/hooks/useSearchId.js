import { useSearchParams } from "react-router-dom";

export function useSearchId() {
  const [params] = useSearchParams();
  return params.get("id");
}
