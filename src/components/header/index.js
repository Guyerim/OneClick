import React, { useState } from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  background-color: lightskyblue;
  height: 3rem;
  display: grid;
  grid-template-columns: 7fr 2fr;

  > * {
    margin: auto;
  }

  > div > a {
    margin: 1rem;
  }
`;

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <HeaderContainer>
      <h3>OneTouch</h3>
      {isLoggedIn ? (
        <a>LOGOUT</a>
      ) : (
        <div>
          <a>LOGIN</a>
          <a>SIGNUP</a>
        </div>
      )}
    </HeaderContainer>
  );
}

export default Header;
