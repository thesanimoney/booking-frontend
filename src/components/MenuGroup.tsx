import {Button} from "@/components/ui/button.tsx";
import {LogIn} from "lucide-react";
import {ModeToggle} from "@/components/ui/modeToggle.tsx";

function MenuGroup() {
    return <>
        <div className="hidden sm:flex gap-2">
            <Button>Sign In <LogIn className={'ml-1'} size={15}/></Button>
            <Button className={'mr-2'} variant={'outline'}>Sign Up</Button>
        </div>
        <ModeToggle/>
    </>
}

export default MenuGroup;