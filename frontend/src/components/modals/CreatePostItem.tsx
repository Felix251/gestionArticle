import { Modal, Form, Input } from 'antd'
import React from 'react'
import { IPost } from '../../models/IPost'
import { postAPI } from '../../store/api/postAPI'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface CreatePostItemProps {
  open: boolean
  onOk: () => void
  onCancel: () => void
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const CreatePostItem = ({ open, onCancel }: CreatePostItemProps) => {
  const [form] = Form.useForm()

  const [createPost, {}] = postAPI.useCreatePostMutation()

  const [postItemTitle, setPostItemTitle] = React.useState('')
  const [postItemBody, setPostItemBody] = React.useState('')
  const [postItemImage, setPostItemImage] = React.useState('')

  const onFinish = async (values: any) => {
    try {
      await createPost({
        title: postItemTitle,
        body: postItemBody,
        postImage: postItemImage,
      } as IPost)
      form.resetFields()
      onCancel()
      toast('A new article was created')
    } catch (err) {
      console.error('Failed to save the post: ', err)
    }
  }

  return (
    <>
      <ToastContainer />
      <Modal
        open={open}
        title="Create New Post"
        okText="Create"
        onCancel={onCancel}
        onOk={onFinish}
      >
        <Form {...layout} form={form} name="control-hooks">
          <Form.Item
            name="title"
            label="Post Title"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) => setPostItemTitle(e.target.value)}
              value={postItemTitle}
            />
          </Form.Item>

          <Form.Item
            name="postImage"
            label="Post Image"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) => setPostItemImage(e.target.value)}
              value={postItemImage}
            />
          </Form.Item>

          <Form.Item
            name="body"
            label="Post Content"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              allowClear
              showCount
              onChange={(e) => setPostItemBody(e.target.value)}
              value={postItemBody}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default CreatePostItem
