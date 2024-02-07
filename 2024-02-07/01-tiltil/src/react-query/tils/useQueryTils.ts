import API from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useQueryTils() {
  return useQuery({
    queryKey: ["tils", { isList: true }],
    queryFn: API.tils.getTils,
  });
}
