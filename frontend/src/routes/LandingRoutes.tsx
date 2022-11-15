
import BlankLayout from '../layouts/LandingLayout'
import HomePage from '../pages/HomePage'

const LandingRoutes = {
  path: '/',
  element: <BlankLayout />,
  children: [
    {
      element: <HomePage />,
      index: true
    },
    {
      path: '/about',
      element: <>About Us</>,
    },
    {
      path: '/contact-us',
      element: <>Contact Us</>,
    }
  ]
}

export default LandingRoutes
