import { Modal, Form, Input, Radio } from "antd";
import React from "react";
import { IPost } from "../../models/IPost";
import { postAPI } from "../../store/api/postAPI";
import { ToastContainer, toast } from "react-toastify";

interface CreatePostItemProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const CreatePostItem = ({ open, onCancel }: CreatePostItemProps) => {
  const [form] = Form.useForm();

  const [createPost, {}] = postAPI.useCreatePostMutation();

  const [postItem, setPostItem] = React.useState({
    titre: "",
    content: "",
    image: "",
    categorieName: "",
  } as IPost);

  const onFinish = async (values: any) => {
    try {
      await createPost({
        titre: postItem.titre,
        content: postItem.content,
        image: postItem.image,
        categorieName: postItem.categorieName,
      } as IPost);
      form.resetFields();
      onCancel();
      toast("A new article was created");
    } catch (err) {
      console.error("Failed to save the post: ", err);
    }
  };

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
            name="titre"
            label="Article Title"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e: { target: { value: string } }) =>
                setPostItem({ ...postItem, titre: e.target.value })
              }
              value={postItem.titre}
            />
          </Form.Item>

          <Form.Item
            name="image"
            label="Article Image"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e: { target: { value: string } }) =>
                setPostItem({ ...postItem, image: e.target.value })
              }
              value={postItem.image}
            />
          </Form.Item>
          <Form.Item
            name="categorieName"
            label="Article categorie"
            rules={[{ required: true }]}
          >
            <Radio.Group
              onChange={(e) =>
                setPostItem({ ...postItem, categorieName: e.target.value })
              }
              value={postItem.categorieName}
            >
              <Radio value="Sport">Sport</Radio>
              <Radio value="Sante">Sante</Radio>
              <Radio value="Education">Education</Radio>
              <Radio value="Technologie">Technologie</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="content"
            label="Article Content"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              allowClear
              showCount
              onChange={(e: { target: { value: any } }) =>
                setPostItem({ ...postItem, content: e.target.value })
              }
              value={postItem.content}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreatePostItem;
