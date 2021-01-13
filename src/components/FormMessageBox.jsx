import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 20px;
  color: white;
  margin: 1rem 0rem;
  
  &.success {
    background-color: ${({ theme }) => theme.colors.success};
  }
  
  &.error {
    background-color: ${({ theme }) => theme.colors.error};
  }
`;

const FormMessageBox = ({ children, type, ...props}) => {
    return (
        <StyledDiv className={type} {...props }>
            {children}
        </StyledDiv>
    )
}

export default FormMessageBox;