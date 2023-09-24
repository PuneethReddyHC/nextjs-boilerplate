import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Paper, Typography, Button, CircularProgress } from '@mui/material'; // Import MUI components
import { RootState } from '../../redux/store';
import { fetchPostById } from '../../redux/posts/actions';

const PostDetails: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedPost = useSelector((state: RootState) => state.posts.selectedPost);
  const loading = useSelector((state: RootState) => state.posts.loading);

  // Get the postId from the router query
  const { postId } = router.query;

  // Fetch post details when the component mounts
  useEffect(() => {
    if (postId) {
      dispatch(fetchPostById(postId)); // Fetch post details by postId
    }
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
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h4">{selectedPost.title}</Typography>
      <Typography variant="body1">{selectedPost.body}</Typography>
      <Button variant="contained" onClick={() => router.push('/posts')}>Go Back</Button>
    </Paper>
  );
};

export default PostDetails;
