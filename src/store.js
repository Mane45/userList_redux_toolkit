import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./feature/userList/userList.slice";

export const store = configureStore({
    reducer: userReducer
})