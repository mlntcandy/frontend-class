import { useAuth } from "../lib/auth/context";

export const LoginButton: React.FC = () => {
  const { loggedIn, login, logout } = useAuth();

  return (
    <button onClick={loggedIn ? logout : login}>
      {loggedIn ? "Выйти" : "Войти"}
    </button>
  );
};
