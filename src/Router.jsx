import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Earn from "./Earn";
import Trade from "./Trade";
import RepoLend from "./RepoLend";
import Docs from "./Docs";
import { EthersProvider } from "../EthersContextProvider";

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
    },
    {
      path: '/docs',
      element: <Docs />
    }
  ]);

  return(
    <EthersProvider>
      <RouterProvider router={router} />
    </EthersProvider>
  )
};

export default Router;