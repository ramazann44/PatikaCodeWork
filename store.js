import {configureStore} from '@reduxjs/toolkit';
import favList from './src/favList';

export default configureStore({
  reducer: {
    favList: favList,
  },
});