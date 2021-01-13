import React from "react";
import styled from "styled-components";
import Link from "../components/Link";
import Icon from "../components/Icon";

const StyledNavItem = styled.div`
  display: flex;
  margin-left: 1rem;
  .item-icon {
    min-width: 20px;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 8px;
  }
  
  .bg-indigo {
    background-color: ${({theme}) => theme.colors.indigo};
  }
`;

const NavItem = ({ children, to, text, icon, className, ...props }) => {
    return (
        <StyledNavItem className={className}>
            <Link to={to}>
                <Icon name={icon} width={20} className="item-icon" />
                <span className="item-text">{text}</span>
            </Link>
        </StyledNavItem>
    );
}

export default NavItem;