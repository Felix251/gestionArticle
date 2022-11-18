import React, { useState } from 'react';
import { postAPI } from "../store/api/postAPI";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";
import { Col, Divider, Row, Pagination } from 'antd';
// import type { PaginationProps } from 'antd';
import SpinnerPostList from './SpinnerPostList';

const PostList = () => {
    const [limit, setLimit] = useState(9);
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

    const handlePostUpdate = (post: IPost) => {
      updatePost(post)
    }

    // const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    //   console.log(current, pageSize);
    //   // setLimit(10)
    // };

    return (
      <>
        <div>
          <button onClick={handleCreate}>Add new post</button>
        </div>
        <Divider orientation="center">Articles</Divider>
        {isLoading && <SpinnerPostList />}
        {error && <h1>Something wrong...</h1>}
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {posts && posts.map(post =>
            <Col className="gutter-row" span={8} key={post.id}>
              <PostItem
                remove={handleRemove}
                update={handlePostUpdate}
                post={post}
              />
            </Col>
          )}
        </Row>
        <Divider />
        <Pagination
          // showSizeChanger
          // onShowSizeChange={onShowSizeChange}
          defaultCurrent={1}
          total={100}
        />
      </>
    );
};

export default PostList;