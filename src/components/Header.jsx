import React from 'react';
import styled from 'styled-components';
import Navigation from "../layouts/Navigation";
import {BrowserRouter as Router} from "react-router-dom";

const StyledHeader = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 100%;
`;

const Header = () => (
    <StyledHeader>
        <h1>Wassopedia</h1>
    </StyledHeader>
);
export default Header;