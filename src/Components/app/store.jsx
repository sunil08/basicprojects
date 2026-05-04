import  { configureStore }  from '@reduxjs/toolkit';
import taskReducer from '../ReduxToolkitTODO/Taskslice'

export const store = configureStore({
    reducer: {
        task: taskReducer
    }
})