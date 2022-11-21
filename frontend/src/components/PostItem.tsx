import React from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import { IPost } from '../models/IPost'
import { Link } from 'react-router-dom'
import UpdatePostItem from './modals/UpdatePostItem'
import { postAPI } from '../store/api/postAPI'
import ConfirmRemovePostItem from './modals/ConfirmRemovePostItem'

const { Meta } = Card

export interface PostItemProps {
  post: IPost
  remove: (post: IPost) => void
  update: (post: IPost) => void
}

const PostItem = ({ post, remove, update }: PostItemProps) => {
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isConfirmRemoveOpen, setIsConfirmRemoveOpen] = React.useState(false)

  // const showModal = (e: React.MouseEvent) => {
  //   setIsModalOpen(true);
  // };

  const handleOk = () => {
    // update({...post, title})
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleOpenRemoveModal = () => {
    setIsConfirmRemoveOpen(true)
  }

  const handlCloseRemoveModal = () => {
    setIsConfirmRemoveOpen(false)
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    remove(post)
  }

  const handlePostUpdate = () => {
    // const title = prompt() || ""
    // update({...post, title, body, postImage})
    setIsModalOpen(true)
  }

  return (
    <>
      <UpdatePostItem
        title={`Update Post: ${post.title}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        postItem={post}
      />
      <ConfirmRemovePostItem
        onOk={handleRemove}
        open={isConfirmRemoveOpen}
        title="Please confirm Remove"
        onCancel={handlCloseRemoveModal}
        contentRemove={post.title}
      />
      <Card
        style={{ width: '100%', marginBottom: 20 }}
        cover={<img alt="example" src={post.postImage} />}
        actions={[
          <EditOutlined key="edit" onClick={handlePostUpdate} />,
          <DeleteOutlined key="delete" onClick={handleOpenRemoveModal} />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={post.title}
          // {post.id}
          description={post.body.substring(0, 100)}
        />
        <div className="readMoreWrap">
          <Link to={`/articles/${post.id}`}>Read more...</Link>
        </div>
      </Card>
    </>
  )
}

export default PostItem
