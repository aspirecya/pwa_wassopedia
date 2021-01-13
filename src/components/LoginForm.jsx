import styled from 'styled-components';
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { useHistory, Redirect } from 'react-router-dom';
import { isLogged } from '../utils/user';
import axios from 'axios';
import {FormMessageBox} from "./index";

const StyledDiv = styled.div`
    width: 50%;
  
    @media (min-width: ${({ theme }) => theme.screens.lg}) {
      width: 20%;
    }
`;


const LoginForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });
    const [formError, setFormError] = useState('');

    const history = useHistory();

    const submit = e => {
        e.preventDefault();

        if(!formState.username || !formState.password) {
            setFormError('Fields cannot be empty.');
            return;
        }

        axios({
            method: 'POST',
            url: 'https://easy-login-api.herokuapp.com/users/login',
            data: {
                username: formState.username,
                password: formState.password
            }
        })
            .then(res => {
                localStorage.setItem('token', res.headers['x-access-token']);
                history.go(0);
            })
            .catch(err => {
                setFormError('Error while logging in.');
                console.log(err);
            })
    }

    if(isLogged()) return <Redirect to="/" />;

    return (
        <StyledDiv>
            <Form onSubmit={submit}>
                <Input
                    onChange={e => setFormState({ ...formState, username: e.target.value })}
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                />

                <Input
                    onChange={e => setFormState({ ...formState, password: e.target.value })}
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                />

                { formError ? <FormMessageBox type="error">{formError}</FormMessageBox> : null }
                <Button type="submit">
                    Login
                </Button>
            </Form>
        </StyledDiv>
    )
}

export default LoginForm;