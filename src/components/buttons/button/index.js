import React from "react";
import styled from "@emotion/styled";

const ButtonContainer = styled.button`
  background-color: white;
  border-radius: 0.5rem;
  width: 5rem;
  height: 2rem;
  margin: 1rem;
`;

function Button({ title }) {
  return <ButtonContainer>{title}</ButtonContainer>;
}

export default Button;
