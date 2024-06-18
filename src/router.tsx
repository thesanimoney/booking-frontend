import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";
import Layout from "@/layout/Layout.tsx";
import SearchPage from "@/pages/searchPage/SearchPage.tsx";
import AuthLayout from "@/layout/AuthLayout.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import RegisterPage from "@/pages/RegisterPage.tsx";
import AboutPage from "@/pages/AboutPage.tsx";
import PropertyPage from "@/pages/PropertyPage.tsx";

const router = createBrowserRouter([
    {path: "/", element: <Layout />, errorElement: <ErrorPage />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "search", element: <SearchPage /> },
            { path: "about", element: <AboutPage/> },
            { path: "property/:id", element: <PropertyPage/> },
        ]},
    {path: '/auth', element: <AuthLayout/>, children: [
            {path: 'login', element: <LoginPage/>},
            {path: 'register', element: <RegisterPage/>},
        ]}
]);

export default router;
