import { PhotosList } from "../components/PhotosList/PhotosList";
import { UsersList } from "../components/UsersList/UsersList";
import { Navigate, useRoutes } from "react-router";
import { PATHS } from "./paths";
import { NotFound } from "../components/NotFound/NotFound";

export const Router = () => {
  const router = useRoutes([
    {
      path: PATHS.root,
      element: <UsersList />,
    },
    {
      path: PATHS.userID(":userID"),
      element: <PhotosList />,
    },
    { path: "*", element: <Navigate to="/" replace /> },
    {
      path: PATHS.user,
      element: <NotFound />,
    },
  ]);
  return router;
};
