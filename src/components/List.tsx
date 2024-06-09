import TypographyP from "@/components/typography/TypographyP.tsx";
import { Link } from "react-router-dom";

interface Props {
    navLinks: string[];
}

function List({ navLinks }: Props) {
    return (
        <>
            {navLinks.map((link, index) => (
                <Link
                    className="transform transition-transform duration-700 ease-in-out hover:bg-secondary px-4 rounded"
                    key={index}
                    to={link.toLowerCase()}
                >
                    <TypographyP text={link} />
                </Link>
            ))}
        </>
    );
}

export default List;
