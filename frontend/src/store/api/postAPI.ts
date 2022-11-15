import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../../models/IPost";
import { BASE_URL } from '../../config'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
      baseUrl: `${BASE_URL}`
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
          query: (limit: number = 5) => ({
            url: `/posts`,
            params: {
              _limit: limit
            }
          }),
          providesTags: result => ['Post']
        }),
        getSinglePost: build.query({
          query: postId => `/posts/${postId}`
        }),
        createPost: build.mutation<IPost, IPost>({
          query: (post) => ({
            url: `/posts`,
            method: 'POST',
            body: post
          }),
          invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost, IPost>({
          query: (post) => ({
            url: `/posts/${post.id}`,
            method: 'PUT',
            body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
          query: (post) => ({
            url: `/posts/${post.id}`,
            method: 'DELETE',
          }),
          invalidatesTags: ['Post']
        }),
    })
})