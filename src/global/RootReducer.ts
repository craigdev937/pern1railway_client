import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { FriendAPI } from "./FriendAPI";

export const Reducer = configureStore({
    reducer: {
        [FriendAPI.reducerPath]: FriendAPI.reducer,
    },      // gDM = getDefaultMiddleware
    middleware: (gDM) => gDM().concat(FriendAPI.middleware),
});

setupListeners(Reducer.dispatch);



