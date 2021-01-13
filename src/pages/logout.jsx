import styled from 'styled-components'
import { FormMessageBox } from '../components';
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

const StyledDiv = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logout = () => {
    const history = useHistory();

    useEffect(() => {
        localStorage.removeItem('token');
        setTimeout(() => {
            history.push('/');
        }, 3000);

    }, []);

    return (
        <StyledDiv>
            <FormMessageBox type="success">
                You have successfully logged out.<br/>
                You'll now be redirected to the homepage.
            </FormMessageBox>
        </StyledDiv>
    )
};

export default Logout;