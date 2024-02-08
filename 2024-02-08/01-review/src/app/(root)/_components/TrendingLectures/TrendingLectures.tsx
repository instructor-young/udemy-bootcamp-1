import LectureCardsList from "@/components/LectureCardsList";

async function getLectures() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos", {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  return data;
}

async function TrendingLectures() {
  const lectures = await getLectures();
  return (
    <LectureCardsList title="이 주의 인기 강의" lectures={lectures || []} />
  );
}

export default TrendingLectures;
