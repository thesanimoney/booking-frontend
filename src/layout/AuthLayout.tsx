import Header from "@/components/Header.tsx";
import {Outlet} from "react-router-dom";

function AuthLayout() {
    return <main className="container">
        <Header isPrimary={false}/>
        <Outlet/>
    </main>
}

export default AuthLayout;