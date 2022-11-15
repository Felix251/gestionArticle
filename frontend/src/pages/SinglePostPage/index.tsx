import { Button, Divider } from 'antd';
import { Await, useParams, Link, useAsyncValue, useLoaderData, useNavigate } from 'react-router-dom'
import { IPost } from '../../models/IPost';
import { postAPI } from '../../store/api/postAPI'
import { ArrowLeftOutlined } from '@ant-design/icons'

interface SinglePostPage {
  match: {};
}

 
const SinglePostPage = () => {
  // const { postId } = match.params
  const {id} = useParams();
  // const { id, post } = useLoaderData()
  const goBack = () => navigate(-1)
  const navigate = useNavigate()
  const {
    data: post,
    isFetching,
    isError
    // isSuccess 
  } = postAPI.useGetSinglePostQuery(id)
  return (
    <>
      <Button
        type='text'
        onClick={goBack}
        icon={<ArrowLeftOutlined />}
      >
        Go back
      </Button>
      <Divider />
      {isFetching && <>Loading...</>}
      {isError && <>Error</>}
      {post &&
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      }
      {/* <Link to={`/editPost/${post.id}`} className='button'>
        Edit Post
      </Link> */}
    </>
  )
}

export default SinglePostPage
