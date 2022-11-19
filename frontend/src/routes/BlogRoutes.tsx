import BlogLayout from '../layouts/BlogLayout'
import BlogPage from '../pages/BlogPage'
import SinglePostPage from '../pages/SinglePostPage'

const BlogRoutes = {
  path: '/articles',
  element: <BlogLayout />,
  children: [
    {
      element: <BlogPage />,
      index: true,
    },
    {
      path: '/articles/:postId',
      element: <SinglePostPage />,
    },
  ],
}

export default BlogRoutes
