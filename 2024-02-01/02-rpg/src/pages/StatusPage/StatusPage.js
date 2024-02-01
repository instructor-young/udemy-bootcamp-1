import React from "react";
import { useSelector } from "react-redux";
import Page from "../../components/Page";

function StatusPage() {
  const location = useSelector((state) => state.character.location);

  return (
    <Page>
      <div>
        캐릭터의 현재 위치: [{location.x},{location.y}]
      </div>
    </Page>
  );
}

export default StatusPage;
