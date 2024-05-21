import { ROUTES } from "../routes";
import { About } from "../routes/About";
import { Home } from "../routes/Home";
import { Contact } from "../routes/Contact";
import { News } from "../routes/News";
import { Universities } from "../routes/Universities";
import { Navigate, useRoutes } from "react-router-dom";
import { useAuth } from "./auth/context";
import { Pdf } from "../routes/Pdf";
import { UniversityCards } from "../routes/UniversityCards";

export const MainRouter = () => {
  const { loggedIn } = useAuth();

  const publicPaths = [
    { path: ROUTES.ABOUT, Component: About },
    { path: ROUTES.CONTACT, Component: Contact },
    { path: ROUTES.HOME, Component: Home },
    { path: ROUTES.PDF, Component: Pdf },
    { path: ROUTES.UNIVERSITY_CARDS, Component: UniversityCards },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ];

  const authPaths = [
    { path: ROUTES.NEWS, Component: News },
    { path: ROUTES.UNIVERSITIES, Component: Universities },
  ];

  const paths = [...publicPaths, ...(loggedIn ? authPaths : [])];

  return useRoutes(paths);
};
