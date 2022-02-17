import React from "react";

import Buttons from "../../components/buttons";
import Map from "../../components/map";
import Header from "../../components/header";
import List from "../../components/list";

import styled from "@emotion/styled";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 10fr;
`;

const MapAndList = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;

  > * {
    margin: 1rem;
  }
`;

function Main() {
  return (
    <MainContainer>
      <Header />
      <Buttons />
      <MapAndList>
        <Map />
        <List />
      </MapAndList>
    </MainContainer>
  );
}

export default Main;
