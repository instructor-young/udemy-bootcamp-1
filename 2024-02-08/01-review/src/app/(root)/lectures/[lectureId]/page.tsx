import Page from "@/components/Page";

function LecturePage({
  params: { lectureId },
}: {
  params: { lectureId: string };
}) {
  return (
    <Page>
      <h2>렉처 아이디는 {lectureId}</h2>
    </Page>
  );
}

export default LecturePage;
