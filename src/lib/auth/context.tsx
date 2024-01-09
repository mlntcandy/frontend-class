import { createContext, useState, useContext } from "react";

type AuthContextType = {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const initContext: AuthContextType = {
  loggedIn: false,
  login: () => {},
  logout: () => {},
};

const authCtx = createContext<AuthContextType>(initContext);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState(initContext.loggedIn);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <authCtx.Provider value={{ loggedIn, login, logout }}>
      {children}
    </authCtx.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(authCtx);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
