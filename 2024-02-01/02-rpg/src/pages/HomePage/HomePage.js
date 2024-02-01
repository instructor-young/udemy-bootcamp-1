import React from "react";
import Character from "../../components/Character";
import Map from "../../components/Map";
import Page from "../../components/Page";

function HomePage() {
  return (
    <Page>
      <Map>
        <Character />
      </Map>
    </Page>
  );
}

export default HomePage;
