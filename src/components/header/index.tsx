import TypographyH2 from "@/components/typography/TypographyH2.tsx";
import {blackLogo, navLinks, whiteLogo} from "@/data/data.ts";
import {useTheme} from "@/components/theme-provider.tsx";
import {Link} from "react-router-dom";
import './header.css'
import List from "@/components/list";
import {LoginHeaderButtons} from "@/components/login";

interface Props {
    isPrimary?: boolean;
}

function Header({isPrimary}: Props) {
    const {theme} = useTheme()
    return <>
        <div className="flex-center">
            <Link to="/">
                <div className="flex items-center gap-2">
                    <img src={theme == 'dark' ? `${whiteLogo}` : `${blackLogo}`} alt="logo"
                         className={'h-12 w-12 -translate-y-1'}/>
                    <div className="hidden sm:block">
                        <TypographyH2 text={'Sani Estate'}/>
                    </div>
                    </div>
            </Link>
        {isPrimary && <div className="hidden flex-row gap-10 flex-wrap lg:flex">
            <List navLinks={navLinks}/>
        </div>}
        {isPrimary && <div className="flex-wrap flex">
            <LoginHeaderButtons/>
        </div>}
    </div>
</>
}

export default Header;