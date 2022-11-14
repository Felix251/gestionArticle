import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import {IPost} from "../models/IPost";

const { Meta } = Card;

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem = ({post, remove, update}: PostItemProps) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ""
        update({...post, title})
    }

    return (
      <Card
        style={{ width: '100%', marginBottom: 20 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <EditOutlined key="edit" onClick={handleUpdate} />,
          <DeleteOutlined key="delete" onClick={handleRemove} />
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={post.title}
          // {post.id}
          description={post.body}
        />
      </Card>
    );
};

export default PostItem;