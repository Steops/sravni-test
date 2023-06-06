import { Navigate, useRoutes } from "react-router";
import { PATHS } from "./paths";
import { NotFoundPage } from "../pages/NotFoundPage";
import { UsersList } from "../components/UsersList";
import { PhotosList } from "../components/PhotosList";

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
      element: <NotFoundPage />,
    },
  ]);
  return router;
};
