import styled from 'styled-components';
import NavItem from "../components/NavItem";

const StyledNavigation = styled.nav`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;
  }        

  width: 20%;
  display: flex;
  flex-direction: column;
  padding-top: 6rem;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  box-shadow: 1px 0 8px 0 rgba(0,0,0,0.35);;
  
`;


const Navigation = ({ open }) => {

    return (
        <StyledNavigation open={open}>
            <NavItem
                to="/home"
                icon="test"
                text="Accueil"
            />

            <NavItem
                to="/test"
                icon="test"
                text="Au hasard"
            />

            <NavItem
                to="/test"
                icon="test"
                text="À proximité"
            />

            <NavItem
                to="/test"
                icon="test"
                text="Connexion"
                className="separated-item"
            />

            <NavItem
                to="/test"
                icon="test"
                text="Configuration"
                className="separated-item"
            />

            <NavItem
                to="/test"
                icon="test"
                text="Faire un don"
                className="separated-item"
            />
        </StyledNavigation>
    );
}

export default Navigation;