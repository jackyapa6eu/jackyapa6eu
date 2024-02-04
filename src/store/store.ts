import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import suggestMusicReducer from './suggestMusicModalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    suggestMusic: suggestMusicReducer,
  },
});

export default store;
