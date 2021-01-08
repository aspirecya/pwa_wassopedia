import React from "react";
import styled from "styled-components";
import Link from "../components/Link";
import Icon from "../components/Icon";

const StyledNavItem = styled.div`
  display: flex;
  
  .item-icon {
    min-width: 20px;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 8px;
  }
  
  &.separated-item {
    margin: 1rem 0 1rem 0;
  }
  
  &:first-child {
    border-top: 1px gray solid;
  }

  &:nth-child(1), &:nth-child(2), &:nth-child(3) {
    border-bottom: 1px gray solid;
  }
  
  &:nth-child(4), &:nth-child(5), &:nth-child(6) {
    border-top: 1px gray solid;
    border-bottom: 1px gray solid;
  }
  
`;

const NavItem = ({ children, to, text, icon, className, ...props }) => {
    return (
        <StyledNavItem className={className}>
            <Link to={to}>
                <Icon name={icon} width={20} className="item-icon"></Icon>
                <span className="item-text">{text}</span>
            </Link>
        </StyledNavItem>
    );
}

export default NavItem;