import { ROUTES } from "../routes";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  const isAuthed = true; // placeholder

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
        {isAuthed && (
          <>
            <Link to={ROUTES.NEWS}>Новости</Link>
            <Link to={ROUTES.UNIVERSITIES}>Университеты</Link>
          </>
        )}
      </nav>
      <button>Войти</button> {/* placeholder */}
    </div>
  );
};
