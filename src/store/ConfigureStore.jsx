import { configureStore } from '@reduxjs/toolkit';
import streamMediareducer from "../features/StreamMedia/streamMediaSlice";


const store = configureStore({
    reducer:{
        StreamMedia: streamMediareducer,

    }
});

export default store; 

