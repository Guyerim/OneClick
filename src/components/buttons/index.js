import React from "react";
import styled from "@emotion/styled";
import Button from "./button";

const ButtonsContainer = styled.div`
  background-color: darkgray;
`;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
