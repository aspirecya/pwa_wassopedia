import styled from 'styled-components'
import {Heading, RegisterForm} from '../components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Register = () => {
    return (
        <StyledDiv>
            <Heading level={1}>
                Register to Wassopedia and start contributing today.
            </Heading>
            <RegisterForm />
        </StyledDiv>
    )
};

export default Register;