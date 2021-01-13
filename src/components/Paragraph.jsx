import styled from 'styled-components';

const StyledParagraph = styled.p`
  width: 66.666667%;
  margin: 1rem auto;
  color: black;
  text-align: center;
`;

const Paragraph = ({ children, ...props }) => {
    return (
        <StyledParagraph {...props }>
            {children}
        </StyledParagraph>
    )
}

export default Paragraph;