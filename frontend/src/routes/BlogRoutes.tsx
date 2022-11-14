import BlogLayout from '../layouts/BlogLayout'
import BlogPage from '../pages/BlogPage'
import SimplePage from '../pages/SimplePage'

const BlogRoutes = {
  path: '/',
  element: <BlogLayout />,
  children: [
    {
      element: <BlogPage />,
      index: true
    },
    {
      path: 'about',
      element: <SimplePage />
    }
  ]
}

export default BlogRoutes