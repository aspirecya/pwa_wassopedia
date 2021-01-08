import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(RouterLink)`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: white;
    width: 100%;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: .9rem;
    }
    
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  
`;

const Link = ({ children, to, className, ...props }) => {
    return (
        <StyledLink to={to} {...props}>
            {children}
        </StyledLink>
    );
}

export default Link;