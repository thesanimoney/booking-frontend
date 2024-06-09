import {useEffect, useState} from "react";
import Header from "@/components/Header.tsx";
import {Outlet} from "react-router-dom";
import BottomMenu from "@/layout/BottomMenu.tsx";

function Layout() {
  const [showBottomMenu, setShowBottomMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setShowBottomMenu(true);
            } else {
                setShowBottomMenu(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <>
        <main className="container">
            <Header/>
            <div className="mx-auto pb-10 md:pb-0" style={{marginTop: "5rem"}}>
                <Outlet/>
            </div>
            {showBottomMenu && (
                <div
                    className={`fixed bottom-[-2px] left-0 md:hidden w-full transition-all duration-1000 ${showBottomMenu ? 'opacity-100' : 'opacity-0'}`}>
                    <BottomMenu/>
                </div>)}
        </main>
    </>
}

export default Layout;
