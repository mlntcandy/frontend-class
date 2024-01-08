import { ROUTES } from "../routes";
import { About } from "../routes/About";
import { Home } from "../routes/Home";
import { Contact } from "../routes/Contact";
import { News } from "../routes/News";
import { Universities } from "../routes/Universities";
import { Navigate, useRoutes } from "react-router-dom";

export const MainRouter = () => {
  const isAuthed = true; // placeholder

  const publicPaths = [
    { path: ROUTES.ABOUT, Component: About },
    { path: ROUTES.CONTACT, Component: Contact },
    { path: ROUTES.HOME, Component: Home },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ];

  const authPaths = [
    { path: ROUTES.NEWS, Component: News },
    { path: ROUTES.UNIVERSITIES, Component: Universities },
  ];

  const paths = [...publicPaths, ...(isAuthed ? authPaths : [])];

  return useRoutes(paths);
};
