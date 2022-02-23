import React from "react";
import styled from "@emotion/styled";
import Button from "./button";

const ButtonsContainer = styled.div`
  min-width: 900px;
  width: 80%;
  border-right: 1px solid gray;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
`;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "+"];

function Buttons() {
  return (
    <ButtonsContainer>
      {arr.map((item, key) => {
        return <Button key={key} title={item} />;
      })}
    </ButtonsContainer>
  );
}

export default Buttons;
