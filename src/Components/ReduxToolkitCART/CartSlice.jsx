import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addShopItem : {
                reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (item) => {
                return{
                    payload: {
                        uid: nanoid(),
                        item
                    }  
                }
            }
        },
        removeShopItem: (state, action) => {
            return state.filter(item => item.uid != action.payload);
        }
    }
})

export const {addShopItem, removeShopItem} = cartSlice.actions;
export default cartSlice.reducer;

