import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {TypographyH4} from "@/components/typography/TypographyH4.tsx";
import Location from "@/components/location";
import Price from "@/components/price";
import Contact from "@/components/contact";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

export default function Landlord() {
    return <>
        <div className="flex flex-col p-0">
            <CardContent className="flex items-center gap-5 p-0">
                    <Avatar className={'max-w-[100%]'}>
                        <AvatarImage src="https://github.com/shadcn.png" alt="landlord"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>
                    <TypographyH4 text={"John Doe"}></TypographyH4>
                    <CardDescription>johndoe@gmail.com</CardDescription>
                    </span>
            </CardContent>
            <CardFooter className={'p-0 mt-5'}>
                <Contact message={true}/>
            </CardFooter>
        </div>
    </>
}

export function MainFeatures() {
    return <Card>
        <CardHeader>
            <CardTitle>
                London Avenue 232
            </CardTitle>
        </CardHeader>
        <CardContent className={'flex flex-col gap-y-3'}>
            <Location location={'London Avenue 354'}/>
            <Price price={350}/>
        </CardContent>
    </Card>
}

