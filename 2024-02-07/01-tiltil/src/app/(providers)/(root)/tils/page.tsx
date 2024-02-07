import Page from "@/components/Page";
import List from "./_components/List";

function TilsListPage({
  searchParams: { type },
}: {
  searchParams: { type: "trending" | "latest" };
}) {
  return (
    <Page>
      띨목록페이지
      <List />
      <List />
      <List />
      <List />
    </Page>
  );
}

export default TilsListPage;
