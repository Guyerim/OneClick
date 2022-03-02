import React from "react";

import styled from "@emotion/styled";

const InfoWindowContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Review = styled.div`
  height: 150px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

const Informations = styled.div`
  width: 400px;
  height: 100px;
`;

const Actions = styled.div`
  height: 50px;
`;

function InfoWindow() {
  return (
    <InfoWindowContainer>
      <Informations></Informations>
      <Review></Review>
      <Actions></Actions>
    </InfoWindowContainer>
  );
}

export default InfoWindow;
