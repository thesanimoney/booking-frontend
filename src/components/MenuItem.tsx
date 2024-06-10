import {LucideIcon} from "lucide-react";
import {Link, useLocation} from "react-router-dom";
import TypographyP from "@/components/typography/TypographyP.tsx";

interface MenuItemProps {
    to: string;
    icon: LucideIcon;
    text: string;
}

export const MenuItem = ({ to, icon: Icon, text }: MenuItemProps) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <li className="flex items-center flex-col">
            <Icon className={isActive ? '' : 'text-zinc-500'} />
            <Link to={to}>
                <TypographyP isSecondary={!isActive} text={text} />
            </Link>
        </li>
    );
};