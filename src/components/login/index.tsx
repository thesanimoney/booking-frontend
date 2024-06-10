import { Button } from "@/components/ui/button.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import {Link} from "react-router-dom";
import {LogIn} from "lucide-react";
import {ModeToggle} from "@/components/ui/modeToggle.tsx";
import styles from './login.module.css'
import '../../index.css'

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link to={'/'} className={styles.link}>
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
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
      </CardContent>
    </Card>
  )
}

export function LoginHeaderButtons() {
    return <>
        <div className="hidden sm:flex gap-2">
            <Link to={'/auth/login'}>
                <Button>Sign In <LogIn className={'ml-1'} size={15}/></Button>
            </Link>
           <Link to={'/auth/register'}>
                <Button className={'mr-2'} variant={'outline'}>Sign Up</Button>
           </Link>
        </div>
        <div className="gridTwoColumns sm:grid-cols-1 gap-1 itemsCenter">
            <ModeToggle/>
            <Link to={'/auth/login'}>
                <Button className="px-4 sm:hidden">
                    <LogIn size={15}/>
                </Button>
            </Link>
        </div>
    </>
}