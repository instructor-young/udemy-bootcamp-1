"use client";

import LectureCardsList from "@/components/LectureCardsList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function TrendingLectures() {
  const { data: lectures } = useQuery({
    queryKey: ["lectures", { type: "trending" }],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.data),
  });

  return (
    <LectureCardsList title="이 주의 인기 강의" lectures={lectures || []} />
  );
}

export default TrendingLectures;
