import {Button} from "@/components/ui/button.tsx"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx"
import {Input} from "@/components/ui/input.tsx"
import {Label} from "@/components/ui/label.tsx"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {CircleUser, LogIn, LogOut} from "lucide-react";
import {ModeToggle} from "@/components/ui/modeToggle.tsx";
import styles from './login.module.css'
import '../../index.css'
import {useToken} from "@/state/tokenStore.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {UserFormDataLogin, userSchemaLogin} from "@/schema/login.ts";
import useLogin, {Login} from "@/hooks/auth/useLogin.ts";
import TypographyP from "@/components/typography/TypographyP.tsx";

export function LoginForm() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<UserFormDataLogin>({
        resolver: zodResolver(userSchemaLogin)
    })
    const {mutate, isSuccess, error, isError} = useLogin()
    const navigate = useNavigate()

    const onSubmit = (data: Login) => {
        mutate(data)

        if (isSuccess) {
            reset()
            navigate('/profile')
        }
    }

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                {isError && <TypographyP isDanger={true} text={error.response!.data as string}/>}
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Username</Label>
                            <Input
                                {...register('username')}
                                id="username"
                                type="username"
                                placeholder="m@example.com"
                                required
                            />
                            {errors.username && <TypographyP isDanger={true} text={errors.username.message!}/>}
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link to={'/'} className={styles.link}>
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input {...register('password')} id="password" type="password" required/>
                            {errors.password && <TypographyP isDanger={true} text={errors.password.message!}/>}
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link to={'/auth/register'} className="underline">
                            Sign up
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export function LoginStateButton() {
    const location = useLocation();
    const {setToken} = useToken()

    const onLogout = () => {
        setToken('');
        localStorage.removeItem('token')
    }

    return <>
        {location.pathname !== "/profile" ? <Link to={'/profile'}>
            <Button className={'mr-2'} variant={'outline'}><CircleUser
                className={'mr-2'}/>Profile</Button>
        </Link> : <Link to={'/'}>
            <Button onClick={onLogout}>
                <LogOut size={15} className={'mr-2'}/>Logout
            </Button>
        </Link>}
    </>
}

export function LoginHeaderButtons() {
    const {token} = useToken()
    const localToken = localStorage.getItem('token')

    return <>
        <div>
            {localToken || token ? <div className={'mr-2'}>
                <LoginStateButton/>
            </div> : <div className={'gap-2'}>
                <div className={'gap-2 hidden sm:flex'}>
                    <Link to={'/auth/login'}>
                        <Button>Sign In <LogIn className={'ml-1'} size={15}/></Button>
                    </Link>
                    <Link to={'/auth/register'}>
                        <Button className={'mr-2'} variant={'outline'}>Sign Up</Button>
                    </Link>
                </div>
                <Link className={'sm:hidden mr-2'} to={'/auth/login'}>
                    <Button><LogIn size={15}/></Button>
                </Link>
            </div>}
        </div>
        <ModeToggle/>
    </>
}

