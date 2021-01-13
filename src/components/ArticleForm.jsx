import styled from 'styled-components';
import Input from "./Input";
import Button from "./Button";
import Form from "./Form";
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import {FormMessageBox, Heading} from "./index";
import { useParams } from "react-router-dom";

const StyledDiv = styled.div`
    width: 50%;
    margin: 3rem auto 1rem auto;
  
    @media (min-width: ${({ theme }) => theme.screens.lg}) {
      width: 30%;
    }
`;

const StyledTextArea = styled.textarea`
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: ${({ theme }) => theme.inputColor};
    border: 1px solid ${({ theme }) => theme.input.inputBorder};
    background: ${({ theme }) => theme.input.inputBackground};
    transition: border .3s ease;
  
        &::placeholder {
          color: ${({ theme }) => theme.input.inputPlaceholder};
        }
        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.input.inputBorderFocus};
        }
    
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
`;

const ArticleForm = ({ ...props }) => {
    const { id } = useParams();

    const [allArticles, setAllArticles] = useState([]);
    const [articleState, setArticleState] = useState({
        id: '',
        title: '',
        content: '',
    });
    const [formMessage, setFormMessage] = useState();

    const addItem = (item) => {
        // assuming no duplicates for demo purposes
        item.id = uuidv4();
        setAllArticles([...allArticles, item]);
        setFormMessage({ type: "success", message: "Articles has been added" });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        addItem({ ...articleState });
        clearInput(e);
    }

    const clearInput = (e) => {
        e.target.reset();
        setArticleState({
            id: "",
            title: "",
            content: "",
        });
    }

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
        <StyledDiv>
            <Heading level={1}>{ !id ? "Create an article" : "Edit an article" }</Heading>
            { formMessage ? <FormMessageBox type={formMessage.type}>{ formMessage.message }</FormMessageBox> : null }
            <Form onSubmit={handleAdd}>
                <Input
                    onChange={e => setArticleState({ ...articleState, title: e.target.value })}
                    name="title"
                    type="text"
                    placeholder="Title"
                    required
                />

                <StyledTextArea
                    onChange={e => setArticleState({ ...articleState, content: e.target.value })}
                    name="content"
                    placeholder="Content"
                    rows="9"
                    cols="35"
                    required
                />

                <Button type="submit">
                    Create article
                </Button>
            </Form>
        </StyledDiv>
    )
}

export default ArticleForm;