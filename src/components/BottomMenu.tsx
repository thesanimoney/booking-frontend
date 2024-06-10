import { CircleUserRound, Home, Search} from "lucide-react";
import { useTheme } from "@/components/theme-provider.tsx";
import {MenuItem} from "@/components/ui/MenuItem.tsx";

function BottomMenu() {
    const { theme } = useTheme();
    return (
        <div className={`mx-auto py-3 rounded-t-2xl opacity-90 ${theme === "dark" ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
            <ul className="flex justify-around">
                <MenuItem to="/" icon={Home} text="Home" />
                <MenuItem to="/search" icon={Search} text="Search" />
                <MenuItem to="/profile" icon={CircleUserRound} text="Profile" />
            </ul>
        </div>
    );
}

export default BottomMenu;
