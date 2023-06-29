import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Friends } from "../containers/Friends";
import { Add } from "../containers/Add";
import { Edit } from "../containers/Edit";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Friends />,
        errorElement: <NotFound />
    },
    {
        path: "/add",
        element: <Add />,
        errorElement: <NotFound />
    },
    {
        path: "/edit/:id",
        element: <Edit />,
        errorElement: <NotFound />
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};



