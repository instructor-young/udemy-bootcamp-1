import Page from "@/components/Page";

async function getLecture(lectureId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${lectureId}`,
    {
      next: { revalidate: 60 },
    }
  );
  const data = await response.json();

  return data;
}

async function LecturePage({
  params: { lectureId },
}: {
  params: { lectureId: string };
}) {
  const lecture = await getLecture(lectureId);
  return (
    <Page>
      <h2>렉처 아이디는 {lecture.title}</h2>
    </Page>
  );
}

export default LecturePage;
