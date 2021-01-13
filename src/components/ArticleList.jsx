import styled from 'styled-components';
import { useState, useEffect } from "react";
import {Button, ArticleItem, Link, Container, Heading} from "./index";


const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({theme}) => theme.screens.md}) {
    flex-wrap: wrap;
  }
  
`;

const ArticleList = ({ ...props }) => {
    const [allArticles, setAllArticles] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('articles'));
        if (items) {
            setAllArticles(items);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('articles', JSON.stringify(allArticles));
    }, [allArticles]);

    return (
        <Container>
            <Heading level={1}>
                Articles
            </Heading>
            <Button>
                <Link to={"/article"}>
                    New article
                </Link>
            </Button>

            <StyledDiv className="articles-list">
                {
                    allArticles.map((item) => (
                        <ArticleItem
                            key={item.id}
                            article={item}
                        />
                    ))
                }
            </StyledDiv>
        </Container>
    )
}

export default ArticleList;