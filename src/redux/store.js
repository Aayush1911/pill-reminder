import { configureStore } from "@reduxjs/toolkit";
import addnew from "./slices/addnew";  // Adjust the import based on your actual file structure

export default configureStore({
    reducer: {
        addnewReducer:addnew,
        deletereducer:addnew
    }
});
