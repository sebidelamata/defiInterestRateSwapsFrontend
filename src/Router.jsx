import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Earn from "./Earn";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
        path: '/earn',
        element: <Earn />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;