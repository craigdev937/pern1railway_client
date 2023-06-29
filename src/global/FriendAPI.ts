import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFriend } from "../models/Interfaces";
const URL = "https://pern1railway-production.up.railway.app/";

export const FriendAPI = createApi({
    reducerPath: "FriendAPI",
    tagTypes: ["Friend"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        all: builder.query<IFriend[], void>({
            query: () => "/",
            providesTags: (result) => result ?
            [...result.map(({ id }) => 
                ({ type: "Friend" as const, id })),
                { type: "Friend", id: "LIST" },
            ] : [{ type: "Friend", id: "LIST" }]
        }),
        one: builder.query<IFriend, string>({
            query: (id) => `/${id}`,
            providesTags: ["Friend"]
        }),
        add: builder.mutation<IFriend, IFriend>({
            query: (payload) => ({
                url: "/",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["Friend"]
        }),
        update: builder.mutation<IFriend, IFriend>({
            query: ({id, ...payload}) => ({
                url: `/${id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["Friend"]
        }),
        delete: builder.mutation<IFriend, string>({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Friend"]
        }),
    }),
});


