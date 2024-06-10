import {Button} from "@/components/ui/button.tsx";
import {LogIn} from "lucide-react";
import {ModeToggle} from "@/components/ui/modeToggle.tsx";

function MenuGroup() {
    return <>
        <div className="hidden sm:flex gap-2">
            <Button>Sign In <LogIn className={'ml-1'} size={15}/></Button>
            <Button className={'mr-2'} variant={'outline'}>Sign Up</Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 justify-items-center items-center gap-1">
            <ModeToggle/>
            <Button className="px-4 sm:hidden"><LogIn size={15}/></Button>
        </div>
    </>
}

export default MenuGroup;