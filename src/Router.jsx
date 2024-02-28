import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Earn from "./Earn";
import Trade from "./Trade";
import RepoLend from "./RepoLend";


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
    },
    {
      path: '/trade',
      element: <Trade classname='trade-page'/>
    },
    {
      path: '/repolend',
      element: <RepoLend />
    }

  ]);

  return <RouterProvider router={router} />;
};

export default Router;