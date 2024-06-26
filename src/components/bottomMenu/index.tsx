import {BookOpenText, Home, Search} from "lucide-react";
import { useTheme } from "@/components/theme-provider.tsx";
import {MenuItem} from "@/components/ui/MenuItem.tsx";
import './bottomMenu.css'

function BottomMenu() {
    const { theme } = useTheme();
    return (
        <div className={`bottomMenu-container ${theme === "dark" ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
            <ul className="flex justify-around">
                <MenuItem to="/" icon={Home} text="Home" />
                <MenuItem to="/search" icon={Search} text="Search" />
                <MenuItem to="/about" icon={BookOpenText} text="About"/>
            </ul>
        </div>
    );
}

export default BottomMenu;
