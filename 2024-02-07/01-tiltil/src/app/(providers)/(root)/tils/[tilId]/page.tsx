"use client";
import API from "@/api";
import Page from "@/components/Page";
import { useQuery } from "@tanstack/react-query";

function TilDetailPage(props: { params: { tilId: string } }) {
  const tilId = props.params.tilId;

  const { data: til } = useQuery({
    queryKey: ["tils", { isList: false, id: tilId }],
    queryFn: () => API.tils.getTil(tilId),
  });

  return <Page title={til?.title}>{til?.content}</Page>;
}

export default TilDetailPage;
