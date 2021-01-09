import React from 'react';
import styled from 'styled-components';
import Heading from "./Heading";

const StyledHeader = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
`;

const Header = () => (
    <StyledHeader>
        <Heading level={1}>Wassopedia</Heading>
    </StyledHeader>
);
export default Header;