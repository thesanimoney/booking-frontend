import TypographyP from "@/components/typography/TypographyP.tsx";
import {MessageCircle, Phone} from "lucide-react";
import {useTheme} from "@/components/theme-provider.tsx";

interface ContactProps {
    message?: boolean;
}

function Contact({ message }: ContactProps) {
    const {theme} = useTheme()
    return <>
        <span className={`flex hover:underline text-zinc-400 ${theme == 'dark' ? 'hover:text-zinc-100' : 'hover:text-zinc-900'} hover:cursor-pointer`}>
            {message ? <MessageCircle className={'mr-2'}/>  : <Phone className={'mr-2'}/> }
            <TypographyP text={'Contact'}></TypographyP>
        </span>
    </>
}

export default Contact;