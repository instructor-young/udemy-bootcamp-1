import LectureCardsList from "@/components/LectureCardsList";
import axios from "axios";

async function getLectures() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  const data = response.data;

  return data;
}

async function TrendingLectures() {
  const lectures = await getLectures();
  return (
    <LectureCardsList title="이 주의 인기 강의" lectures={lectures || []} />
  );
}

export default TrendingLectures;
