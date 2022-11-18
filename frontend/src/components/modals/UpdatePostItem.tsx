import { Modal, Button, Form, Input } from 'antd';
import React from 'react';
import { IPost } from '../../models/IPost';
import { postAPI } from '../../store/api/postAPI';
// import { PostItemProps } from '../PostItem';

interface UpdatePostItemProps {
  // update: PostItemProps;
  postItem: IPost;
  open: boolean;
  title: string;
  onOk: (() => void);
  onCancel: (() => void);
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
 
const UpdatePostItem = ({open, title, onOk, onCancel, postItem}: UpdatePostItemProps ) => {
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [form] = Form.useForm();
  
  const [postItemUpdate, setPostItemUpdatet] = React.useState<IPost>({
    title: '',
    postImage: '',
    body: ''
  } as IPost);

  const onFinish = (values: any) => {
    console.log(values);
    // props.submit({...event, author: user.username})
    updatePost({...postItemUpdate, id: postItem.id, title: postItem.title, body: postItem.body, postImage: postItem.postImage})
  };

  return (
    <Modal
      open={open}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="Post Title"
          rules={[{ required: true }]}
          // help={postItem.title}
        >
          <Input
            onChange={e => setPostItemUpdatet({...postItemUpdate, title: e.target.value})}
            value={postItemUpdate.title}
          />
        </Form.Item>

        <Form.Item
          name="image"
          label="Post Image"
          rules={[{ required: true }]}
        >
          <Input
            onChange={e => setPostItemUpdatet({...postItemUpdate, postImage: e.target.value})}
            value={postItemUpdate.postImage}
          />
        </Form.Item>

        <Form.Item
          name={[postItem.body, "content"]}
          label="Post Content"
          rules={[{ required: true }]}
        >
          <Input.TextArea
            allowClear showCount
            onChange={e => setPostItemUpdatet({...postItemUpdate, body: e.target.value})}
            value={postItemUpdate.body}
          />
        </Form.Item>
        
        
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}
 
export default UpdatePostItem;