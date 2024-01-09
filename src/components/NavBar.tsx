import { useAuth } from "../lib/auth/context";
import { ROUTES } from "../routes";
import { Link } from "react-router-dom";
import { LoginButton } from "./LoginButton";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #eee;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const NavBar: React.FC = () => {
  const { loggedIn } = useAuth();

  return (
    <NavbarWrapper>
      <Nav>
        <Link to={ROUTES.HOME}>Главная</Link>
        <Link to={ROUTES.ABOUT}>О нас</Link>
        <Link to={ROUTES.CONTACT}>Контакты</Link>
        {loggedIn && (
          <>
            <Link to={ROUTES.NEWS}>Новости</Link>
            <Link to={ROUTES.UNIVERSITIES}>Университеты</Link>
          </>
        )}
      </Nav>
      <LoginButton />
    </NavbarWrapper>
  );
};
