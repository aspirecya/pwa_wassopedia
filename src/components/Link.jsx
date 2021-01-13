import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(RouterLink)`
    width: 100%;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    text-decoration: none;
    transition: color 0.3s linear;
    display: flex;
    align-items: center;
  
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      font-size: .9rem;
    }
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  
`;

const Link = ({ children, to, className, ...props }) => {
    return (
        <StyledLink to={to} className={className} {...props}>
            {children}
        </StyledLink>
    );
}

export default Link;