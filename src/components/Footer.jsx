import React from 'react';
import styled from 'styled-components';
import { Icon, Heading, Container } from "./index";

const StyledHeader = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  
  background-color: rgba(31,41,55,1);
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({theme}) => theme.screens.md}) {
    padding-top: 1rem;
    flex-direction: column;
  }
  
  .item-logo {
    background-color: ${({theme}) => theme.colors.indigo};
    border-radius: 9999px;
    padding: 0.35rem;
    margin-right: 0.5rem;
  }
  
  .heading-class {
    color: white;
    margin-right: 0.5rem;
  }
`;

const Footer = () => (
    <Container>
        <StyledHeader>
            <Icon name="logo" width={20} className="item-logo" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></Icon>
            <Heading level={3} className="heading-class">
                Wassopedia – No rights reserved - 2021
            </Heading>
        </StyledHeader>
    </Container>
);
export default Footer;