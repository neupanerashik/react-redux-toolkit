//we will use a function configureStore from reduxjs/toolkit to create store
import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/UserSlice';

const store = configureStore({
    reducer:{
        users: userSlice,
    },
});

export default store;
