import {Button} from "@/components/ui/button.tsx";
import {LogIn} from "lucide-react";
import {ModeToggle} from "@/components/ui/modeToggle.tsx";
import {Link} from "react-router-dom";

function LoginMenuGroup() {
    return <>
        <div className="hidden sm:flex gap-2">
            <Link to={'/auth/login'}>
                <Button>Sign In <LogIn className={'ml-1'} size={15}/></Button>
            </Link>
           <Link to={'/auth/register'}>
                <Button className={'mr-2'} variant={'outline'}>Sign Up</Button>
           </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 justify-items-center items-center gap-1">
            <ModeToggle/>
            <Link to={'/auth/login'}>
                <Button className="px-4 sm:hidden"><LogIn size={15}/></Button>
            </Link>
        </div>
    </>
}

export default LoginMenuGroup;