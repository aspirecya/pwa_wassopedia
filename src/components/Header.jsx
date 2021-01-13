import React from 'react';
import styled from 'styled-components';
import { isLogged } from "../utils/user";
import { Icon, NavItem, Heading } from "./index";

const StyledHeader = styled.div`
  color: white;
  background-color: rgba(31,41,55, 1);
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 2rem 2rem;
  

  @media (max-width: ${({theme}) => theme.screens.md}) {
    justify-content: center;
  }
  
  .item-logo {
    background-color: ${ ({theme}) => theme.colors.indigo };
    border-radius: 9999px;
    padding: 0.35rem;
    margin-right: 0.5rem;
  }
  
  .heading-class {
    color: white;
    font-weight: 700;
    margin-right: 0.5rem;
  }
  
  .nav {
    display: flex;
    flex-direction: row;
    color: white;
  }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Icon name="logo" width={40} className="item-logo" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            <Heading level={1} className="heading-class">Wassopedia</Heading>

            <nav className="nav">
                <NavItem
                    to="/"
                    icon="home"
                    text="Home"
                />

                <NavItem
                    to="/articles"
                    icon="article"
                    text="Articles"
                />

                { isLogged() ?
                    <NavItem
                        to="/logout"
                        icon="logout"
                        text="Logout"
                    />
                    :
                    <NavItem
                        to="/login"
                        icon="login"
                        text="Login"
                    />
                }
            </nav>
        </StyledHeader>
    );
}
export default Header;