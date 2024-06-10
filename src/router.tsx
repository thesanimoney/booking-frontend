import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";
import Layout from "@/layout/Layout.tsx";
import SearchPage from "@/pages/SearchPage.tsx";

const router = createBrowserRouter([
    {path: "/", element: <Layout />, errorElement: <ErrorPage />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "search", element: <SearchPage /> },
        ]}
]);

export default router;
