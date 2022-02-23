import React from "react";
import styled from "@emotion/styled";

const ListControllerContainer = styled.div`
  padding: 0 20px;

  select {
    text-align: center;
    height: 40px;
    width: 100px;
  }
`;

function ListController() {
  return (
    <ListControllerContainer>
      <select>
        <option>정렬</option>
      </select>
    </ListControllerContainer>
  );
}

export default ListController;
