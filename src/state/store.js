import { configureStore } from "@reduxjs/toolkit";
import manageUserReducer from "./slices/manageUser.js";

export default configureStore({
    reducer: {
        user: manageUserReducer
    }
})