import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 2px;
  padding: 10px 25px;
  background: none;
  border: 1px solid #c0c0c0;
  border-radius: 2px;
  color: #666;
  font-size: 1.125em;
  outline: none;
  transition: all 100ms ease-out;
  
  &:hover,&:focus{
    transform: translateY(-3px);
  }
`;

const Button = ({ children, ...props}) => {
    return (
        <StyledButton {...props }>
            {children}
        </StyledButton>
    )
}

export default Button;