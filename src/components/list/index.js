import React from "react";
import styled from "@emotion/styled";
import ListItem from "./listItem";

const ListContainer = styled.div`
  background-color: khaki;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function List() {
  return (
    <ListContainer>
      <ListItem />
      <ListItem />
      <ListItem />
    </ListContainer>
  );
}

export default List;
