"use client";
import API from "@/api";
import Page from "@/components/Page";
import { useQuery } from "@tanstack/react-query";

function TilDetailPage(props: { params: { tilId: string } }) {
  const tilId = props.params.tilId;

  useQuery({
    queryKey: ["tils", { isList: false, id: tilId }],
    queryFn: () => API.tils.getTil(tilId),
  });

  return <Page>{tilId}</Page>;
}

export default TilDetailPage;
