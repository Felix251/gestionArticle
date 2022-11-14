import React, { useState } from 'react';
import { postAPI } from "../store/api/postAPI";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";
import { Col, Divider, Row } from 'antd';

const PostList = () => {
    const [limit, setLimit] = useState(10);
    const {data: posts, error, isLoading} =  postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
      <>
        <div>
          <button onClick={handleCreate}>Add new post</button>
          {isLoading && <h1>Loading...</h1>}
          {error && <h1>Something wrong...</h1>}
        </div>
        <Divider orientation="left">All Posts</Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {posts && posts.map(post =>
            <Col className="gutter-row" span={8} key={post.id}>
              <PostItem
                remove={handleRemove}
                update={handleUpdate}
                post={post}
              />
            </Col>
            
          )}
        </Row>
      </>
    );
};

export default PostList;