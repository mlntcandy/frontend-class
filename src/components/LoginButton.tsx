import { useAuth } from "../lib/auth/context";
import styled from "styled-components";

interface StyledButtonProps {
  danger?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ danger }) =>
    danger ? "var(--danger-100)" : "var(--gray-100)"};
  border: 1px solid
    ${({ danger }) => (danger ? "var(--danger-200)" : "var(--gray-200)")};
  border-radius: 0.25em;
  padding: 0.5em 1em;
  cursor: pointer;
`;

export const LoginButton: React.FC = () => {
  const { loggedIn, login, logout } = useAuth();

  return (
    <StyledButton onClick={loggedIn ? logout : login} danger={loggedIn}>
      {loggedIn ? "Выйти" : "Войти"}
    </StyledButton>
  );
};
