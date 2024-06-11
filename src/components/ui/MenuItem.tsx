import {LucideIcon} from "lucide-react";
import {Link, useLocation} from "react-router-dom";
import TypographyP from "@/components/typography/TypographyP.tsx";

interface MenuItemProps {
    to: string;
    icon: LucideIcon;
    text: string;
}

export const MenuItem = ({to, icon: Icon, text}: MenuItemProps) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link to={to}>
            <li className="flex items-center flex-col">

                <Icon className={isActive ? '' : 'text-zinc-500'}/>
                <TypographyP isSecondary={!isActive} text={text}/>
            </li>
        </Link>
    );
};