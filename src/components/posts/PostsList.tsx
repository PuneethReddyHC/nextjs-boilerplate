import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { CircularProgress, List, ListItem, ListItemText, Button } from '@mui/material';
import { fetchPosts } from '../../redux/posts/actions';
import { useRouter } from 'next/router';
const PostsList: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const loading = useSelector((state: RootState) => state.posts.loading.fetchPosts);
  const error = useSelector((state: RootState) => state.posts.error.fetchPosts);
  const hasMore = useSelector((state: RootState) => state.posts.hasMore);
  const currentPage = useSelector((state: RootState) => state.posts.currentPage);
  const lastPostRef = useRef<HTMLLIElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  const entry = entries[0];
  if (entry.isIntersecting && hasMore && !loading) {
    handleLoadMore();
  }
};

useEffect(() => {
  observer.current = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  if (lastPostRef.current) {
    observer.current.observe(lastPostRef.current);
  }

  return () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };
}, [currentPage, hasMore, loading]);


  // Fetch posts when the component mounts and when currentPage changes
  useEffect(() => {
    if(!hasMore){
      dispatch(fetchPosts(currentPage));
    }
  }, [hasMore, dispatch, currentPage]);

  const handlePostClick = (postId: string) => {
    router.push(`/posts/${postId}`);
  };

  const handleLoadMore = () => {
    if(!loading && hasMore){
      dispatch(fetchPosts(currentPage));
    }
  };

  return (
    <div>
      <List component="nav">
        {posts.map((post, index) => (
          <ListItem
            key={post.id}
            onClick={() => handlePostClick(post.id)}
            ref={index === posts.length - 1 ? lastPostRef : null}
          >
            <ListItemText primary={post.title} />
          </ListItem>
        ))}
      </List>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <CircularProgress />
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default PostsList;
