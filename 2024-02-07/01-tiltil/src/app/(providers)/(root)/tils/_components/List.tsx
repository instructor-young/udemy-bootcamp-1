"use client";

import API from "@/api";
import { useQuery } from "@tanstack/react-query";

function List() {
  useQuery({
    queryKey: ["tils", { isList: true }],
    queryFn: API.tils.getTils,
  });

  return <div>List</div>;
}

export default List;
