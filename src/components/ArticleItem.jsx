import { Heading, Link } from "./index";
import styled from 'styled-components';
import React from "react";
import Icon from "./Icon";

const StyledContainer = styled.div`
    background-color: ${({theme}) => theme.colors.gray};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 2rem;
    margin: 1rem;

    @media (min-width: ${({theme}) => theme.screens.md}) {
      width: 25%;
    }

    .item-icon {
        min-width: 20px;
        width: 20px;
        height: 20px;
        padding: 0.5rem;
    }
  
    .item-text {
      color: black;
    }
  
    .calltoaction {
      display: flex;
      align-items: center;
    }
`;
const ArticleItem = ({ article, ...props }) => {
    return (
        <StyledContainer>
            <Heading level={3}>
                {article.title}
            </Heading>

            <div>
                <Link className="calltoaction" to={`/articles/${article.id}`}>
                    <span className="item-text">Read</span>
                    <Icon name="arrow" width={20} className="item-icon" />
                </Link>
            </div>
        </StyledContainer>
    )
}

export default ArticleItem;