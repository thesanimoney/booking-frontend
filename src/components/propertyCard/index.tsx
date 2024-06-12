import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Bath, Bed, Bookmark, MapPin} from "lucide-react";
import TypographyP from "@/components/typography/TypographyP.tsx";
import {Badge} from "@/components/ui/badge"
import {Toggle} from "@/components/ui/toggle.tsx";
import {useState} from "react";
import {useTheme} from "@/components/theme-provider.tsx";


export function PropertyCard() {
    const [saved, setSaved] = useState<boolean>()
    const {theme} = useTheme()

    return (
        <Card className="w-full sm:h-[400px] grid sm:grid-cols-2 rounded-xl hover:scale-105 transition duration-500 ease-in-out">
            <img className="object-fill sm:h-[400px] w-full rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                 src="src/assets/dalle.webp"
                 alt="dalle"/>
            <div className="mx-auto flex flex-col gap-y-10">
                <CardHeader>
                    <CardTitle>A Great Apartment Next to the Beach!</CardTitle>
                </CardHeader>
                <CardContent className={'gridColumn gap-y-5'}>
       <span className={'flex gap-x-3 items-center'}>
          <MapPin/>
          <TypographyP text={'456 Park Avenue, London'}/>
       </span>
                    <span className={'text-2xl'}>
                        <Badge className={'text-2xl mr-2'} variant="default">$300</Badge>
                        per month</span>
                </CardContent>
                <CardFooter className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3">
                    <div className="col-span-2">
                        <div className="flex flex-col">
                            <Badge className={'text-sm rounded-md mb-2'} variant="secondary"><Bed className={'mr-2'}/> 2
                                Bedrooms</Badge>
                            <Badge className={'text-sm rounded-md'} variant="secondary"><Bath className={'mr-2'}/>1
                                Bathroom</Badge>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-row gap-x-2 justify-self-end">
                        {theme === 'dark' && ( <Toggle pressed={saved} onPressedChange={() => setSaved(prevState => !prevState)}><Bookmark
                            fill={saved ? 'white' : 'black'} size={30}/></Toggle>)}
                         {theme === 'light' && ( <Toggle pressed={saved} onPressedChange={() => setSaved(prevState => !prevState)}><Bookmark
                            fill={saved ? 'black' : 'white'} size={30}/></Toggle>)}
                    </div>
                </CardFooter>
            </div>
        </Card>
    )
}
