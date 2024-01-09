import { useAuth } from "../lib/auth/context";
import { ROUTES } from "../routes";
import { Link } from "react-router-dom";
import { LoginButton } from "./LoginButton";
import styled from "styled-components";
import { ThemeToggle } from "./ThemeToggle";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--gray-100);
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const RightSide = styled.div`
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
      <RightSide>
        <LoginButton />
        <ThemeToggle />
      </RightSide>
    </NavbarWrapper>
  );
};
