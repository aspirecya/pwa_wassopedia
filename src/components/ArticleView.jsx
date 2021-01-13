import { Paragraph, Container, Heading, Button } from "./index";
import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
  
    @media (max-width: ${({theme}) => theme.screens.md}) {
      justify-content: center;
    }
  
    .cta-link {
      padding-left: 1rem;
      color: black;
    }
`;

const ArticleView = ({ id, ...props }) => {
    let history = useHistory();
    const [allArticles, setAllArticles] = useState([]);
    const [currentArticle, setCurrentArticle] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('articles'));
        const current = items.find(el => {
            return el.id === id;
        });

        if (items) {
            setAllArticles(items);
            setCurrentArticle(current)
        }
    }, []);

    const removeItem = (itemToBeDeleted) => {
        const index = allArticles.indexOf(itemToBeDeleted);
        const removed = allArticles.splice(index, 1);
        setAllArticles(removed);

        localStorage.setItem('articles', JSON.stringify(allArticles));
        history.push('/articles');
    };

    return (
        <Container>
            <Button className="cta-link">
                Edit the article
            </Button>

            <Button onClick={() => removeItem(currentArticle)}>
                Delete the article
            </Button>

            <StyledDiv>
                <Heading level={3}>
                    { currentArticle.title }
                </Heading>

                <Paragraph>
                    { currentArticle.content }
                </Paragraph>
            </StyledDiv>
        </Container>
    )
}

export default ArticleView;