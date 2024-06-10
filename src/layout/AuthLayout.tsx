import {Outlet} from "react-router-dom";
import Header from "@/components/header";

function AuthLayout() {
    return <main className="container">
        <Header isPrimary={false}/>
        <Outlet/>
    </main>
}

export default AuthLayout;