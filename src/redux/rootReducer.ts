// src/redux/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './posts/reducer'; /// Import your postReducer
// Import other reducers as needed

const rootReducer = combineReducers({
  // Add your individual reducers here
  posts: postReducer, // Assuming you have a 'posts' slice in your state
  // Add more reducers for other parts of your app here
});

export default rootReducer;
