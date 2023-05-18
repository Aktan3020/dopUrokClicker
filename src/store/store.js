import { configureStore } from '@reduxjs/toolkit';

import clicksReducer from './reducers/clicksSlice';

const store = configureStore({
  reducer: {
    clicksReducer
  },
});

export default store;