"use client";

import API from "@/api";
import TilCard from "@/components/TilCard";
import { Til } from "@/types/Til.type";
import { useQuery } from "@tanstack/react-query";

function PopularTils() {
  const returnValueOfUseQuery = useQuery({
    queryKey: ["tils", { isList: true, type: "popular" }],
    queryFn: API.tils.getTils,
    refetchOnWindowFocus: true,
  });
  const { data: tils, isLoading } = returnValueOfUseQuery;

  return (
    <div>
      {isLoading ? (
        "로딩중..."
      ) : (
        <ol className="flex flex-col gap-y-4">
          {tils.map((til: Til) => (
            <li key={til.id}>
              <TilCard key={til.id} til={til} />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default PopularTils;
