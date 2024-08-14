import { createSlice } from "@reduxjs/toolkit";


const initialState={
    carts:[]


}
export const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action)=>{
            //input parameter is action and action.payload is the data that we are passing from the component
            state.carts.push(action.payload)
            


            

        },
        remove:(state,action)=>{
           state.carts=state.carts.filter((item)=>item.id!==action.payload)


        },

    }

    
});
export const {add,remove}=CartSlice.actions
export default CartSlice.reducer



