import TypographyP from "@/components/typography/TypographyP.tsx";
import { Link, useLocation } from "react-router-dom";
import './list.module.css'

interface Props {
    navLinks: Record<string, string>;
}

function List({ navLinks }: Props) {
    const location = useLocation();

    return (
        <>
            {Object.entries(navLinks).map(([link, path], index) => {
                const isActive = location.pathname === `/${path}`;
                return (
                    <Link className="link hover:bg-secondary transition-all ease-in-out 400ms py-1 px-3 rounded-md"
                        key={index}
                        to={`/${path}`}>
                        <TypographyP isSecondary={!isActive} text={link} />
                    </Link>
                );
            })}
        </>
    );
}

export default List;
