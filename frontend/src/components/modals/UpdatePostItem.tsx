import { Modal, Form, Input } from "antd";
import React from "react";
import { IPost } from "../../models/IPost";
import { postAPI } from "../../store/api/postAPI";
import { ToastContainer, toast } from "react-toastify";

interface UpdatePostItemProps {
  postItem: IPost;
  open: boolean;
  title: string;
  onCancel: () => void;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const UpdatePostItem = ({
  open,
  title,
  onCancel,
  postItem,
}: UpdatePostItemProps) => {
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [form] = Form.useForm();

  const [postItemUpdate, setPostItemUpdate] = React.useState<IPost>({
    id: postItem.id,
    titre: postItem.titre,
    content: postItem.content,
    image: postItem.image,
    categorieName: postItem.categorieName,
  } as IPost);

  const onFinish = () => {
    updatePost({
      ...postItemUpdate,
      id: postItemUpdate.id,
      titre: postItemUpdate.titre,
      content: postItemUpdate.content,
      image: postItemUpdate.image,
      categorieName: postItemUpdate.categorieName,
    });
    onCancel();
    toast.success(
      "The article: " + `${postItemUpdate.titre}` + " was updated",
      {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
      }
    );
  };

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
            { name: ["titre"], value: postItemUpdate.titre },
            { name: ["image"], value: postItemUpdate.image },
            { name: ["content"], value: postItemUpdate.content },
            { name: ["categorieName"], value: postItemUpdate.categorieName },
          ]}
        >
          <Form.Item
            name="titre"
            label="Article Title"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e: any) =>
                setPostItemUpdate({ ...postItemUpdate, titre: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            name="image"
            label="Article Image"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e: any) =>
                setPostItemUpdate({
                  ...postItemUpdate,
                  image: e.target.value,
                })
              }
            />
          </Form.Item>

          <Form.Item
            name="content"
            label="Article Content"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              allowClear
              showCount
              onChange={(e: any) =>
                setPostItemUpdate({
                  ...postItemUpdate,
                  content: e.target.value,
                })
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdatePostItem;
