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
    { path: ROUTES.ABOUT, component: About },
    { path: ROUTES.CONTACT, component: Contact },
    { path: ROUTES.HOME, component: Home },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ];

  const authPaths = [
    { path: ROUTES.NEWS, component: News },
    { path: ROUTES.UNIVERSITIES, component: Universities },
  ];

  const paths = [...publicPaths, ...(isAuthed ? authPaths : [])];

  return useRoutes(paths);
};
