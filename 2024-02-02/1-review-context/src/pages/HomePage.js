import { nanoid } from "nanoid";
import React, { useContext } from "react";
import Page from "../components/Page";
import { AuthContext } from "../contexts/auth.context";

function HomePage() {
  const { setUserId } = useContext(AuthContext);
  const handleUpdateUserId = () => {
    setUserId(nanoid());
  };

  return (
    <Page>
      여긴 홈페이지에요
      <button onClick={handleUpdateUserId}>누르면 유저 ID 새로 부여함</button>
    </Page>
  );
}

export default HomePage;
