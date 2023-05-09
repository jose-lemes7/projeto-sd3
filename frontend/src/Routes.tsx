import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import React from "react";
import { 
    createBrowserRouter,
    RouterProvider,
 } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
    }
  ]);

function Routes () {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode> 
    );
}

export default Routes;