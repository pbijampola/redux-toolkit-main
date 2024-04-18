import { createSlice } from "@reduxjs/toolkit";
import { getbooks } from "../../store/bookAction";

const initialState={
    books:[],
    isloading:false,
    error:''
    
}

export const booksSlice=createSlice({
    name:'books',
    initialState,
    reducers:{},
    extraReducers:builder=>{
        // builder.addCase(getbooks.pending,(state)=>{
        //     state.isloading=true
        // })
        builder.addCase(getbooks.fulfilled,(state,action)=>{
            // state.isloading=false
            state.books=action.payload
            
        })
        // builder.addCase(getbooks.rejected,(state,action)=>{
        //     state.isloading=false
        //     state.error=action.error;
            
        // })
    }
})

export default booksSlice.reducer