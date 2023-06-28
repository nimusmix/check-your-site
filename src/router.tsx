import { createBrowserRouter, Outlet } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/detail/:siteIdx",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
