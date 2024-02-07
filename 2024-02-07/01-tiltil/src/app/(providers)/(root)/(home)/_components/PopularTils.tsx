"use client";

import API from "@/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

function PopularTils() {
  const returnValueOfUseQuery = useQuery({
    queryKey: ["til", { type: "popular" }],
    queryFn: API.tils.getTils,
    refetchOnWindowFocus: true,
  });
  const { data: tils, isLoading, refetch } = returnValueOfUseQuery;

  console.log("returnValueOfUseQuery", returnValueOfUseQuery);

  return (
    <div>
      <h2>띨~</h2>
      <button className="border" onClick={() => refetch()}>
        새로고침
      </button>
      {isLoading ? (
        "로딩중..."
      ) : (
        <ol>
          {tils.map((til) => (
            <li key={til.id}>
              <Link href={`/til/${til.id}`}>{til.title}</Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default PopularTils;
