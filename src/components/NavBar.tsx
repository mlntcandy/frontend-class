import { useAuth } from "../lib/auth/context";
import { ROUTES } from "../routes";
import { Link } from "react-router-dom";
import { LoginButton } from "./LoginButton";

export const NavBar: React.FC = () => {
  const { loggedIn } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "lightblue",
      }}
    >
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to={ROUTES.HOME}>Главная</Link>
        <Link to={ROUTES.ABOUT}>О нас</Link>
        <Link to={ROUTES.CONTACT}>Контакты</Link>
        {loggedIn && (
          <>
            <Link to={ROUTES.NEWS}>Новости</Link>
            <Link to={ROUTES.UNIVERSITIES}>Университеты</Link>
          </>
        )}
      </nav>
      <LoginButton />
    </div>
  );
};
