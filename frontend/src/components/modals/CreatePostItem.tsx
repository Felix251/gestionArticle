import { Modal, Button, Form, Input } from 'antd'
import React from 'react'
import { IPost } from '../../models/IPost'
import { postAPI } from '../../store/api/postAPI'

interface CreatePostItemProps {
  // postItem: IPost;
  open: boolean
  onOk: () => void
  onCancel: () => void
  // create: (values: IPost) => void;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const CreatePostItem = ({ open, onCancel }: CreatePostItemProps) => {
  const [form] = Form.useForm()

  const [createPost, {}] = postAPI.useCreatePostMutation()

  // const [postItemCreate, setPostItemCreate] = React.useState<IPost>({
  //   title: '',
  //   postImage: '',
  //   body: ''
  // } as IPost);

  const [postItemTitle, setPostItemTitle] = React.useState('')
  const [postItemBody, setPostItemBody] = React.useState('')
  const [postItemImage, setPostItemImage] = React.useState('')

  // const onFinish = (values: any) => {
  //   console.log(values);
  //   // create({id: postItem.id, title: postItem.title, body: postItem.body, postImage: postItem.postImage})
  //   // createPost(values)
  //   createPost({
  //     title: postItemTitle,
  //     body: postItemBody,
  //     postImage: postItemImage,
  //     id: 0
  //   } as IPost)
  // };

  const onFinish = async (values: any) => {
    // await createPost(values as IPost)
    try {
      await createPost({
        title: postItemTitle,
        body: postItemBody,
        postImage: postItemImage,
      } as IPost)
      form.resetFields()
      // onCancel()
    } catch (err) {
      console.error('Failed to save the post: ', err)
    }
  }

  return (
    <Modal
      open={open}
      title="Create New Post"
      okText="Create"
      onCancel={onCancel}
      onOk={onFinish}
    >
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        // onFinish={onFinish}
      >
        <Form.Item name="title" label="Post Title" rules={[{ required: true }]}>
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

        <Form.Item {...tailLayout}>
          {/* <Button type="primary" htmlType="submit">
            Submit
          </Button> */}
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreatePostItem
