import styled from 'styled-components';
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

const StyledDiv = styled.div`
    width: 50%;
  
    @media (min-width: ${({ theme }) => theme.screens.lg}) {
      width: 20%;
    }
`;

const RegisterForm = () => {
    return (
        <StyledDiv>
            <Form>
                <Input
                    name="email"
                    type="text"
                    required
                />

                <Input
                    name="password"
                    type="password"
                    required
                />

                <Button type="submit">
                    Register
                </Button>
            </Form>
        </StyledDiv>
    )
}

export default RegisterForm;