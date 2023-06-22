import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import SingleToy from "../Pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blogs",
                element: <Blog></Blog>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: "/mytoys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "/addtoys",
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: "/toy/:id",
                element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_LINK}/toy/${params.id}`)
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);

export default router;