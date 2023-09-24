// src/redux/posts/reducer.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts, fetchPostById } from './actions';
import { Post } from "../../types/Posts";

interface PostsState {
  posts: Post[];
  selectedPost: Post | null | undefined;
  currentPage: number;
  hasMore: boolean;
  loading: {
    fetchPosts: boolean;
    fetchPostById: boolean;
  };
  error: {
    fetchPosts: string | null;
    fetchPostById: string | null;
  };
}

const initialState: PostsState = {
  posts: [],
  selectedPost: null,
  currentPage: 1,
  hasMore: false,
  loading: {
    fetchPosts: false,
    fetchPostById: false,
  },
  error: {
    fetchPosts: null,
    fetchPostById: null,
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading.fetchPosts = true;
        state.error.fetchPosts = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading.fetchPosts = false;
        state.posts = [...state.posts, ...action.payload];
        state.currentPage += 1;
        state.hasMore = state.posts.length > 0;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading.fetchPosts = false;
        state.error.fetchPosts = action.error.message || 'An error occurred';
      })
      .addCase(fetchPostById.pending, (state) => {
        state.loading.fetchPostById = true;
        state.error.fetchPostById = null;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading.fetchPostById = false;
        state.selectedPost = action.payload
        // Update the posts or details as needed
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading.fetchPostById = false;
        state.error.fetchPostById = action.error.message || 'An error occurred';
      });
  },
});

export default postsSlice.reducer;
