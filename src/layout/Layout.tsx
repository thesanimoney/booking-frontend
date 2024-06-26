import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import BottomMenu from "@/components/bottomMenu";
import Header from "@/components/header";
import {Toaster} from "@/components/ui/toaster.tsx";

function Layout() {
const [showBottomMenu, setShowBottomMenu] = useState(true);
useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
        clearTimeout(timeoutId);
        setShowBottomMenu(false);

        timeoutId = setTimeout(() => {
            setShowBottomMenu(true);
        }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timeoutId);
    };
}, []);

    return (
    <>
        <main className="container">
            <Header isPrimary={true}/>
            <div className="mx-auto pb-10 md:pb-0 margin-top-responsive">
                <Outlet/>
            </div>
            <div className={`fixed bottom-[-2px] left-0 lg:hidden w-full transition-opacity z-10 duration-500 ${showBottomMenu ? 'opacity-100' : 'opacity-0'}`}>
                {showBottomMenu && <BottomMenu/>}
            </div>
            <Toaster />
        </main>
    </>
);
}

export default Layout;
