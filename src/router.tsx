import {createBrowserRouter} from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";
import Layout from "@/layout/Layout.tsx";

const router = createBrowserRouter([
    {path: "", element: <Layout/>, errorElement: <ErrorPage/>, children: [
            {path: '/', element: <HomePage/>},
        ]
    },


]);

export default router;