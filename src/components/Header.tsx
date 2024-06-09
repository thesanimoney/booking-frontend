import TypographyH2 from "@/components/typography/TypographyH2.tsx";
import List from "@/components/List.tsx";
import {navLinks} from "@/data/data.ts";
import {useTheme} from "@/components/theme-provider.tsx";
import MenuGroup from "@/components/MenuGroup.tsx";

function Header() {
    const {theme} = useTheme()

    return <>
        <div className="mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
                <img src={theme == 'dark' ? "src/assets/logoWhite.png" : "src/assets/logoBlack.png"} alt="logo"
                     className={'h-12 w-12 -translate-y-1'}/>
                <TypographyH2 text={'Sani Estate'}/></div>
            <div className="hidden flex-row gap-10 flex-wrap lg:flex">
                <List navLinks={navLinks}/>
            </div>
            <div className="flex-wrap flex">
               <MenuGroup/>
            </div>
        </div>
    </>
}

export default Header;