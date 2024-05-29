import { useSearchParams } from "react-router-dom";

export function useSearchSort() {
  const [p] = useSearchParams();
  return p.get("sort");
}
