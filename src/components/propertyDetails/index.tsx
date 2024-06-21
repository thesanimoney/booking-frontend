import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {TypographyH4} from "@/components/typography/TypographyH4.tsx";
import Location from "@/components/location";
import Price from "@/components/price";
import Contact from "@/components/contact";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Post} from "@/hooks/posts/getPosts.ts";

interface MainFeatures {
    data: Post
}

interface Landlord {
    email: string
    username: string
}

export default function Landlord({email, username}: Landlord) {
    return <>
        <div className="flex flex-col p-0">
            <CardContent className="flex items-center gap-5 p-0">
                    <Avatar className={'max-w-[100%]'}>
                        <AvatarImage src="https://github.com/shadcn.png" alt="landlord"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>
                    <TypographyH4 text={username}></TypographyH4>
                    <CardDescription>{email}</CardDescription>
                    </span>
            </CardContent>
            <CardFooter className={'p-0 mt-5'}>
                <Contact message={true}/>
            </CardFooter>
        </div>
    </>
}

export function MainFeatures({data}: MainFeatures) {
    return <Card>
        <CardHeader>
            <CardTitle>
                {data.title}
            </CardTitle>
        </CardHeader>
        <CardContent className={'flex flex-col gap-y-3'}>
            <Location location={data.address}/>
            <Price price={data.price}/>
        </CardContent>
    </Card>
}

