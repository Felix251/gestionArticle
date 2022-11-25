import { Modal, Form, Input } from 'antd'
import React from 'react'
import { IPost } from '../../models/IPost'
import { postAPI } from '../../store/api/postAPI'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface UpdatePostItemProps {
  postItem: IPost
  open: boolean
  title: string
  onCancel: () => void
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const UpdatePostItem = ({
  open,
  title,
  onCancel,
  postItem,
}: UpdatePostItemProps) => {
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [form] = Form.useForm()

  const [postItemUpdate, setPostItemUpdatet] = React.useState<IPost>({
    id: postItem.id,
    title: postItem.title,
    postImage: postItem.postImage,
    body: postItem.body,
  } as IPost)

  const onFinish = () => {
    updatePost({
      ...postItemUpdate,
      id: postItemUpdate.id,
      title: postItemUpdate.title,
      body: postItemUpdate.body,
      postImage: postItemUpdate.postImage,
    })
    onCancel()
    toast('The article: ' + `${postItemUpdate.title}` + ' was updated')
  }

  return (
    <>
      <ToastContainer />
      <Modal
        open={open}
        title={title}
        onOk={onFinish}
        onCancel={onCancel}
        okText="Update"
      >
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          fields={[
            { name: ['title'], value: postItemUpdate.title },
            { name: ['postImage'], value: postItemUpdate.postImage },
            { name: ['body'], value: postItemUpdate.body },
          ]}
        >
          <Form.Item
            name="title"
            label="Post Title"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) =>
                setPostItemUpdatet({ ...postItemUpdate, title: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            name="postImage"
            label="Post Image"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) =>
                setPostItemUpdatet({
                  ...postItemUpdate,
                  postImage: e.target.value,
                })
              }
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
              onChange={(e) =>
                setPostItemUpdatet({ ...postItemUpdate, body: e.target.value })
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default UpdatePostItem
