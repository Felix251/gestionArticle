import BlogLayout from '../layouts/BlogLayout'
import AllPostsPage from '../pages/AllPostsPage'
import SimplePage from '../pages/SimplePage'

const BlogRoutes = {
  path: '/',
  element: <BlogLayout />,
  children: [
    {
      element: <AllPostsPage />,
      index: true
    },
    {
      path: 'about',
      element: <SimplePage />
    }
  ]
}

export default BlogRoutes