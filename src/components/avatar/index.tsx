import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

function UserAvatar() {
    return <>
        <Avatar className={'max-w-[100%]'}>
            <AvatarImage src="https://github.com/shadcn.png" alt="landlord"/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </>
}

export default UserAvatar;