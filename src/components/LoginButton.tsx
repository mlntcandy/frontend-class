import { useAuth } from "../lib/auth/context";
import styled from "styled-components";

interface StyledButtonProps {
  danger?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ danger }) => (danger ? "#fcc" : "#eee")};
  border: 1px solid ${({ danger }) => (danger ? "#f88" : "#ccc")};
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
