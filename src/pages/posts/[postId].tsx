import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useRouter } from 'next/router';
import { Paper, Typography, Button, CircularProgress } from '@mui/material'; // Import MUI components
import { RootState } from '../../redux/store';
import { fetchPostById } from '../../redux/posts/actions';
import { Meta } from '@/layout/Meta';

const PostDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  const selectedPost = useSelector((state: RootState) => state.posts.selectedPost);
  const loading = useSelector((state: RootState) => state.posts.loading.fetchPostById);

  // Get the postId from the router query
  const { postId } = router.query;

  // Fetch post details when the component mounts
  useEffect(() => {
    dispatch(fetchPostById(postId as string)); // Fetch post details by postId
  }, [postId, dispatch]);

  // Handle the case when data is still loading
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  // Handle the case when the post is not found
  if (!selectedPost) {
    return <div>Post not found</div>;
  }

  return (
    <>
        <Meta title={selectedPost.title} description={selectedPost.body} />
        <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h4">{selectedPost.title}</Typography>
        <Typography variant="body1">{selectedPost.body}</Typography>
        <Button variant="contained" onClick={() => router.push('/posts')}>Go Back</Button>
        </Paper>
    </>
    
  );
};

export default PostDetails;
