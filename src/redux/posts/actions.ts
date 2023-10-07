// src/redux/actions/postActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import api from '../../api';
import { Post } from '@/types/Posts';
import { AxiosError } from 'axios'; 
import { RootState } from '../store';
// Define an async thunk action to fetch posts
export const fetchPosts = createAsyncThunk<Post[], number>('posts/fetchPosts', async (page: number, { getState }) => {
    try {
      const response = await api.get<Post[]>(`/posts?_page=${page}&_limit=10`); // Adjust the page and limit as needed
      return response.data;
    } catch (error) {
      throw new Error('Error fetching paginated posts: ' + (error as AxiosError).message);
    }
  });

// Define an async thunk for fetching a post by its ID
export const fetchPostById = createAsyncThunk(
    'posts/fetchPostById',
    async (postId: string, { getState, rejectWithValue }) => {
      try {
        // Check if the post with the given ID already exists in the store
        const state = getState() as RootState;
        const existingPost = state.posts.posts.find((post : Post) => post.id === postId);
  
        if (existingPost) {
          // If the post already exists, return it directly from the store
          console.log("existing post");
          
          return existingPost;
        }
  
        // If the post doesn't exist in the store, make the API request
        const response = await api.get<Post>(`/posts/${postId}`);
        return response.data;
      } catch (error) {
        // Use rejectWithValue to pass the error message to the reducer
        return rejectWithValue((error as AxiosError).message);
      }
    }
  );

export const addPost = createAction<string>('ADD_POST');
export const deletePost = createAction<string>('DELETE_POST');
