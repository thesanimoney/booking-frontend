import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Bath, Bed, Bookmark} from "lucide-react";
import {Badge} from "@/components/ui/badge"
import {useState} from "react";
import {useTheme} from "@/components/theme-provider.tsx";
import {TypographyH4} from "@/components/typography/TypographyH4.tsx";
import Location from "@/components/location";
import Price from "@/components/price";
import {Toggle} from "@/components/ui/toggle.tsx";
import {Link} from "react-router-dom";

export function PropertyCard() {
    const [saved, setSaved] = useState<boolean>()
    const {theme} = useTheme()

    return (
       <Link to={'/property/1'}>
            <Card
            className="w-full sm:h-[400px] grid sm:grid-cols-2 rounded-xl hover:scale-105 transition duration-500 ease-in-out">
            <img className="object-fill sm:h-[400px] w-full rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                 src="/static/assets/dalle.webp"
                 alt="dalle"/>
            <div className="mx-auto flex flex-col gap-y-10">
                <CardHeader>
                    <CardTitle>A Great Apartment Next to the Beach!</CardTitle>
                </CardHeader>
                <CardContent className={'gridColumn gap-y-5'}>
                    <Location location={'456 Park Avenue, London'}/>
                   <Price price={356}/>
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
                        {theme === 'dark' && (
                            <Toggle pressed={saved} onPressedChange={() => setSaved(prevState => !prevState)}><Bookmark
                                fill={saved ? 'white' : 'black'} size={30}/></Toggle>)}
                        {theme === 'light' && (
                            <Toggle pressed={saved} onPressedChange={() => setSaved(prevState => !prevState)}><Bookmark
                                fill={saved ? 'black' : 'white'} size={30}/></Toggle>)}
                    </div>
                </CardFooter>
            </div>
        </Card>
       </Link>
    )
}

export function MiniCard() {
    const [saved, setSaved] = useState<boolean>()

    return <>
        <div className="mx-auto grid-cols-2 grid items-center">
            <img className={'max-h-[120px] rounded-md col-span-1'} src="../../../public/static/assets/dalle.webp" alt="image"/>
            <span className={'col-span-1'}>
                <TypographyH4 text={'456 Park Avenue, London'}/>
              <div className={'flex justify-between'}>
                    <Badge className={'text-md mt-2 bg-zinc-700 text-zinc-50 hover:bg-zinc-600'}
                           variant={'default'}>$356</Badge>
                      <div>
                            <Toggle className={'bg-white'} pressed={saved}
                                    onPressedChange={() => setSaved(prevState => !prevState)}><Bookmark
                                fill={saved ? '' : 'white'} size={25}/></Toggle>
                    </div>
              </div>
            </span>
        </div>
    </>
}
