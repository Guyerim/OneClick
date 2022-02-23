import React from "react";

import Buttons from "../../components/buttons";
import Map from "../../components/map";
import Header from "../../components/header";
import List from "../../components/list";

import styled from "@emotion/styled";
import ListController from "../../components/ListController";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1200px;
  min-height: 100%;
  position: relative;
`;

const Options = styled.div`
  display: flex;
  flex: 0 0 auto;
  border-bottom: 1px solid gray;
  align-items: center;
  height: 60px;
  @media (max-width: 1444px) {
    height: 120px;
    > div > button {
      margin-bottom: 5px;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  height: calc(100vh - 122px);
  width: 100%;
  @media (max-width: 1444px) {
    height: calc(100vh - 182px);
  }
`;

function Main() {
  return (
    <MainContainer>
      <Header />
      <Options>
        <Buttons />
        <ListController />
      </Options>
      <Contents>
        <Map />
        <List />
      </Contents>
    </MainContainer>
  );
}

export default Main;
