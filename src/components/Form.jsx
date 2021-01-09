import styled from "styled-components";

const StyledForm = styled.form`
    
`;

const Form = ({ children, ...props }) => {
    return (
        <StyledForm { ...props }>
            { children }
        </StyledForm>
    );
}

export default Form;