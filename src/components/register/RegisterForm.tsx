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
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import useRegister, {Register} from "@/hooks/auth/useRegister.ts";
import {UserFormDataRegister, userSchemaRegister} from "@/schema/register.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import TypographyP from "@/components/typography/TypographyP.tsx";

export default function RegisterForm() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<UserFormDataRegister>({
        resolver: zodResolver(userSchemaRegister)
    })
    const {mutate, isSuccess, error, isError} = useRegister()
    const navigate = useNavigate()

    const onSubmit = (data: Register) => {
        mutate(data)

        if (isSuccess) {
            reset()
            navigate('/profile')
        }
    }

    return (
        <>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    {isError && <TypographyP isDanger={true} text={error.response!.data as string}/>}
                    <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                        <div className="grid gap-4">
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">Username</Label>
                                    <Input {...register('username')} id="username" placeholder="maximus11" required/>
                                    {errors.username && <TypographyP isDanger={true} text={errors.username.message!}/>}
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    {...register('email')}
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                                {errors.email && <TypographyP isDanger={true} text={errors.email.message!}/>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input {...register('password')} id="password" type="password"/>
                                {errors.password && <TypographyP isDanger={true} text={errors.password.message!}/>}
                            </div>
                            <Button type="submit" className="w-full">
                                Create an account
                            </Button>
                        </div>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link to={'/auth/login'} className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
