import styled from "styled-components";

const StyledHeading = styled.div`
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${props => ( props.theme.primaryLight )}
`;

const Heading = ({ children, level = 1, ...props }) => {
    return (
        <StyledHeading as={`h${level}`} {...props}>
            {children}
        </StyledHeading>
    );
}

export default Heading;