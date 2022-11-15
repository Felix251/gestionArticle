import { createBrowserRouter } from 'react-router-dom'
import BlogRoutes from './BlogRoutes'
import ErrorRoutes from './ErrorRoutes'
// import SimpleRoutes from './SimpleRoutes'

export const router = createBrowserRouter(
  [BlogRoutes, ErrorRoutes]
)
