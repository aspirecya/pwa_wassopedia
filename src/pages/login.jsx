import styled from 'styled-components'
import {Heading, LoginForm} from '../components';

const StyledDiv = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
    return (
        <StyledDiv>
            <Heading level={1}>
                Login to start contributing.
            </Heading>
            <LoginForm />
        </StyledDiv>
    )
};

export default Login;