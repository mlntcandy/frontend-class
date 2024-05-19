import { useAuth } from "../lib/auth/context";
import { ROUTES } from "../routes";
import { LoginButton } from "./LoginButton";
import styled from "styled-components";
import { ThemeToggle } from "./ThemeToggle";
import { StyledLink } from "./StyledLink";

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
        <StyledLink to={ROUTES.HOME}>Главная</StyledLink>
        <StyledLink to={ROUTES.ABOUT}>О нас</StyledLink>
        <StyledLink to={ROUTES.CONTACT}>Контакты</StyledLink>
        <StyledLink to={ROUTES.PDF}>PDF</StyledLink>
        <StyledLink to={ROUTES.UNIVERSITY_CARDS}>Карточки университетов</StyledLink>
        {loggedIn && (
          <>
            <StyledLink to={ROUTES.NEWS}>Новости</StyledLink>
            <StyledLink to={ROUTES.UNIVERSITIES}>Университеты</StyledLink>
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
