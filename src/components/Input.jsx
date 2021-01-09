import styled from 'styled-components';

const StyledInput = styled.input`
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

const Input = ({ children, ...props }) => {
    return (
        <StyledInput {...props}>
            { children }
        </StyledInput>
    );
}

export default Input;