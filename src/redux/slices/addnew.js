import {createSlice} from "@reduxjs/toolkit"
const addnewslice=createSlice({
    name:'addnewslice',
    initialState:{
        newreminder:[]
    },
    reducers:{
        addnewreminder:(state,action)=>{
            state.newreminder.push(action.payload)
        },
        deletereminder:(state,action)=>{
            state.newreminder = state.newreminder.filter(item => item.id !== action.payload);
        }
    }
})
export default addnewslice.reducer
export const {addnewreminder,deletereminder}=addnewslice.actions;
