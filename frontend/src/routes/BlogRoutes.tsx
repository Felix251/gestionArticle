import BlogLayout from '../layouts/BlogLayout'
import BlogPage from '../pages/BlogPage'
import SinglePostPage from '../pages/SinglePostPage'

const BlogRoutes = {
  path: '/',
  element: <BlogLayout />,
  children: [
    {
      element: <BlogPage />,
      index: true
    },
    {
      path: '/posts/:postId',
      element: <SinglePostPage />
    }
  ]
}

export default BlogRoutes