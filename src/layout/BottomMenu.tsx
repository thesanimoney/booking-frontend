import {Link} from "react-router-dom";
import {CircleUserRound, Home, Search} from "lucide-react";
import {useTheme} from "@/components/theme-provider.tsx";
import TypographyP from "@/components/typography/TypographyP.tsx";

function BottomMenu() {
    const {theme} = useTheme();

    return (
        <div className={`mx-auto py-3 rounded-t-2xl opacity-90 ${theme === "dark" ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
            <ul className="flex justify-around">
                <li className="flex items-center flex-col">
                    <Home/>
                    <Link to={'/home'}>
                        <TypographyP text={'Home'}/>
                    </Link>
                </li>
                <li className="flex items-center flex-col">
                    <Search/>
                      <Link to={'/search'}>
                        <TypographyP text={'Search'}/>
                    </Link>
                </li>
                <li className="flex items-center flex-col">
                    <CircleUserRound/>
                   <Link to={'/profile'}>
                        <TypographyP text={'Profile'}/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default BottomMenu;
