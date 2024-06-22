import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import TypographyP from "@/components/typography/TypographyP.tsx";
import UserAvatar from "@/components/avatar";
import {Card} from "@/components/ui/card.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {PropertyCard} from "@/components/propertyCard";
import TypographyH2 from "@/components/typography/TypographyH2.tsx";
import updateUser, {User} from "@/hooks/user/updateUser.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {UserFormDataUpdate, userSchemaUpdate} from "@/schema/updateUser.ts";
import {Post} from "@/hooks/posts/getPosts.ts";
import {Link} from "react-router-dom";


interface UserInfo {
    avatar?: string,
    username: string,
    email: string,
}

interface UserPosts {
    savedPosts: Post[]
    myPosts: Post[]
}

export function ProfileEdit({username, email}: UserInfo) {
    const {mutate, isPending} = updateUser()
    const {register, handleSubmit, formState: {errors}} = useForm<UserFormDataUpdate>({
        resolver: zodResolver(userSchemaUpdate)
    })

    const onSubmit = (data: User) => {
        mutate(data)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Update Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader>
                        <DialogTitle>Update profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Username
                            </Label>
                            <Input
                                {...register('username')}
                                id="username"
                                defaultValue={username}
                                className="col-span-3"
                            />
                            {errors.username && <TypographyP isDanger={true} text={errors.username.message!}/>}
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                {...register('email')}
                                id="email"
                                defaultValue={email}
                                className="col-span-3"
                            />
                            {errors.email && <TypographyP isDanger={true} text={errors.email.message!}/>}
                        </div>

                    </div>
                    <DialogFooter>
                        <Button disabled={isPending} variant="outline" type={'submit'}>
                            Update Profile</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export function UserInfo({username, email}: UserInfo) {
    return <>
        <Card className="flex flex-col gap-3 p-2">
            <span className={'flex gap-x-3 items-center'}>
                <TypographyP text={'Avatar'}/>
                <UserAvatar/>
            </span>
            <span>
                <TypographyP text={'Username'}/>
                <TypographyP isSecondary={true} text={username || 'Oops... error'}/>
            </span>
            <span>
                <TypographyP text={'Email'}/>
                <TypographyP isSecondary={true} text={email || 'Oops... error'}/>
            </span>

        </Card>
    </>
}

export function UserPosts({savedPosts, myPosts}: UserPosts) {
    return <>
        <div className="flex justify-between mb-5">
            <TypographyH2 text={'My list'}/>
           <Link to={'create-post'}>
                <Button>Add new property</Button>
           </Link>
        </div>
        <Tabs defaultValue="saved">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="saved">Saved</TabsTrigger>
                <TabsTrigger value="properties">My properties</TabsTrigger>
            </TabsList>
            <TabsContent value="saved" className={'flex flex-col gap-y-4'}>
                {savedPosts.length >= 0 && savedPosts.map((item, index) => <PropertyCard key={index} id={item._id} data={item}/>)}
            </TabsContent>
            <TabsContent value="properties" className={'flex flex-col gap-y-4'}>
                 {myPosts.length >= 0 && myPosts.map((item, index) => <PropertyCard key={index} id={item._id} data={item}/>)}
            </TabsContent>
        </Tabs></>

}
