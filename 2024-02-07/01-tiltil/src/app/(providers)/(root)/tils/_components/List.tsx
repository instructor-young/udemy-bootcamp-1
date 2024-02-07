"use client";

import { useQueryTils } from "@/react-query/tils/useQueryTils";

function List() {
  const { data, isLoading } = useQueryTils();

  return <div>List</div>;
}

export default List;
