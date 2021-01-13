import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  margin: auto;

  @media (min-width: ${({theme}) => theme.screens.sm}) {
    max-width: 640px;
  }

  @media (min-width: ${({theme}) => theme.screens.md}) {
    max-width: 768px;
  }

  @media (min-width: ${({theme}) => theme.screens.lg}) {
    max-width: 1024px;
  }

  @media (min-width: ${({theme}) => theme.screens.xl}) {
    max-width: 1280px;
  }
  
  @media (min-width: ${({theme}) => theme.screens.xxl}) {
    max-width: 1536px;
  }
  
  
`;

const Container = ({ children, ...props }) => {
    return (
        <StyledContainer {...props}>
            {children}
        </StyledContainer>
    );
}

export default Container;