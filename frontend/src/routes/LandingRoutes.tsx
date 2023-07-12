import BlankLayout from "../layouts/LandingLayout";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import ErrorRouterElement from "./ErrorRouterElement";

const LandingRoutes = {
  path: "/",
  element: <BlankLayout />,
  errorElement: <ErrorRouterElement />,
  children: [
    {
      element: <HomePage />,
      index: true,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
  ],
};

export default LandingRoutes;
