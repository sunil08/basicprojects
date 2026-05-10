import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Constants from "../Utils/Constants";

const initialState = {
    items: [],
    status: 'idle'
};

export const getAllProducts = createAsyncThunk('products/get', async ()=>{
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    return result;
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // fetchProducts: (state, action)=>{
        //     state.items = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.status = Constants.LOADING;
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Constants.IDLE;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.status = Constants.ERROR;
        })
    }
})

export const {fetchProducts} = productsSlice.actions;
export default productsSlice.reducer;

// NOT RECOMMENDED
// Below code require much handling so we use async thunk that will handle everything by self
export function getProducts(){
    // Redux Thunk automatically injects: dispatch, getState that are by default 2 parameters and in the background they have same name and we can name our own like: send, _GetState both works.
    // When we configureStore it automatically attaches thunk and middleware to the store
    return async function getFetchAsync(dispatch, getState){
        const data = await fetch('https://fakestoreapi.com/products');
        const result = await data.json();
        //dispatch(fetchProducts(result));
    }
    // If this works fine then why we need createAsyncThunk?
    // Because it increases boilerplate code that sends each state like pending, fulfilled, rejected in the code and dispatches the actions but in the case of createAsyncThunk we don't need to sent these; builder does it.
}

// dispatch() is the function that:

// sends actions to Redux
// triggers reducers
// updates store
// causes UI re-render

// Without dispatch, Redux state never changes.