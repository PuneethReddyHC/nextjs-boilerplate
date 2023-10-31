// src/redux/rootReducer.ts
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './posts/reducer'; /// Import your postReducer
// Import other reducers as needed

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  // Add your individual reducers here
  posts: postReducer, // Assuming you have a 'posts' slice in your state
  // Add more reducers for other parts of your app here
});

export default persistReducer(persistConfig, rootReducer)
