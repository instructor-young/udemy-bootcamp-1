"use client";

import API from "@/api";
import Page from "@/components/Page";
import PopularTils from "./_components/PopularTils";

function HomePage() {
  API.user.getProfile();

  return (
    <Page>
      <PopularTils />
    </Page>
  );
}

export default HomePage;
