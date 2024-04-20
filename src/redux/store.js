import { configureStore } from "@reduxjs/toolkit";
import addnew from "./slices/addnew";  

export default configureStore({
    reducer: {
        addnewReducer:addnew,
        deletereducer:addnew
    }
});
