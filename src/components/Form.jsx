import styled from "styled-components";

const StyledForm = styled.form`
    width: 100%;
`;

const Form = ({ children, ...props }) => {
    return (
        <StyledForm { ...props }>
            { children }
        </StyledForm>
    );
}

export default Form;