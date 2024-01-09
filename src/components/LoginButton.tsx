import { useAuth } from "../lib/auth/context";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 0.25em;
  padding: 0.5em 1em;
  cursor: pointer;
`;

export const LoginButton: React.FC = () => {
  const { loggedIn, login, logout } = useAuth();

  return (
    <StyledButton onClick={loggedIn ? logout : login}>
      {loggedIn ? "Выйти" : "Войти"}
    </StyledButton>
  );
};
