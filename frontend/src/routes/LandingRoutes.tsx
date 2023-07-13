import BlankLayout from "../layouts/LandingLayout";
import AboutPage from "../pages/AboutPage";
import ContactUsPage from "../pages/ContactUsPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ErrorRouterElement from "./ErrorRouterElement";
import AdminPage from "../pages/AdminPage";
import Login from "../pages/LoginPage";
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
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
  ],
};

export default LandingRoutes;
