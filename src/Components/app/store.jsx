import  { configureStore }  from '@reduxjs/toolkit';
import taskReducer from '../ReduxToolkitTODO/Taskslice'
import cartSlice from '../ReduxToolkitCART/CartSlice'
import productsSlice from '../ReduxToolkitCART/Products'

export const store = configureStore({
    reducer: {
        task: taskReducer,
        cart: cartSlice,
        products: productsSlice
    }
})