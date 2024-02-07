"use client";
import Page from "@/components/Page";
import { useQuery } from "@tanstack/react-query";

function TilDetailPage(props: { params: { tilId: string } }) {
  const tilId = props.params.tilId;

  useQuery({
    queryKey: ["til", { id: tilId }],
    queryFn: async () => {
      const url = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til/${tilId}`;
      const options = { method: "GET" };

      const response = await fetch(url, options);
      const data = await response.json();

      return data;
    },
  });

  return <Page>{tilId}</Page>;
}

export default TilDetailPage;
