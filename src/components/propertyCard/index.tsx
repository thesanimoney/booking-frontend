import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Bath, Bed, Bookmark} from "lucide-react";
import {Badge} from "@/components/ui/badge"
import {useTheme} from "@/components/theme-provider.tsx";
import {TypographyH4} from "@/components/typography/TypographyH4.tsx";
import Location from "@/components/location";
import Price from "@/components/price";
import {Toggle} from "@/components/ui/toggle.tsx";
import {Link} from "react-router-dom";
import {Post} from "@/hooks/posts/getPosts.ts";
import {SavedPost, ToggleSavedPosts} from "@/hooks/posts/toggleSavedPosts.ts";
import NotificationCenter from "@/components/notification";

interface Props {
    data: Post
    id: string
}

export function PropertyCard({data, id}: Props) {
    const {theme} = useTheme()
    const {mutate, isSuccess, isError, error, data: successText} = ToggleSavedPosts()
    const onSave = (data: SavedPost) => mutate(data)
    const errorTitle = 'Error property saving'


    NotificationCenter({isError, isSuccess, error, successText, errorTitle})

    return <>

        <Card
            className="w-full mb-5 sm:h-[400px] grid sm:grid-cols-2 rounded-xl hover:scale-105 transition duration-500 ease-in-out">
            <img className="object-fill sm:h-[400px] w-full rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                 src="/static/assets/dalle.webp"
                 alt="dalle"/>
            <div className="mx-auto flex flex-col gap-y-10">
                <Link to={`/property/${id}`}>
                    <CardHeader>
                        <CardTitle className={'hover:underline'}>{data.title}</CardTitle>
                    </CardHeader>
                    <CardContent className={'gridColumn gap-y-5'}>
                        <Location location={data.address}/>
                        <Price price={data.price}/>
                    </CardContent>
                </Link>
                <CardFooter className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3">
                    <div className="col-span-2">
                        <div className="flex flex-col">
                            <Badge className={'text-sm rounded-md mb-2'} variant="secondary"><Bed
                                className={'mr-2'}/>{data.bedroom} Bedrooms</Badge>
                            <Badge className={'text-sm rounded-md'} variant="secondary"><Bath
                                className={'mr-2'}/>{data.bathroom} Bathrooms</Badge>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-row gap-x-2 justify-self-end">
                        {theme === 'dark' && (
                            <Toggle pressed={data.saved} onPressedChange={() => onSave({postId: data._id})}><Bookmark
                                fill={data.saved ? 'white' : 'black'} size={30}/></Toggle>)}
                        {theme === 'light' && (
                            <Toggle pressed={data.saved} onPressedChange={() => onSave({postId: data._id})}><Bookmark
                                fill={data.saved ? 'black' : 'white'} size={30}/></Toggle>)}
                    </div>
                </CardFooter>
            </div>
        </Card>

    </>

}

export function MiniCard({data}: Props) {
    const {mutate, isSuccess, isError, error, data: successText} = ToggleSavedPosts()
    const onSave = (data: SavedPost) => mutate(data)
    const errorTitle = 'Error property saving'


    NotificationCenter({isError, isSuccess, error, successText, errorTitle})

    return <>
        <div className="mx-auto grid-cols-2 grid items-center">
            <img className={'max-h-[120px] rounded-md col-span-1'} src="../../../public/static/assets/dalle.webp"
                 alt="image"/>
            <span className={'col-span-1'}>
                     <Link to={`/property/${data._id}`}>
                <TypographyH4 text={data.address}/>
                           </Link>
              <div className={'flex justify-between'}>
                    <Badge className={'text-md mt-2 bg-zinc-700 text-zinc-50 hover:bg-zinc-600'}
                           variant={'default'}>{data.price}</Badge>
                      <div>
                            <Toggle className={'bg-white'} pressed={data.saved}
                                    onPressedChange={() => onSave({postId: data._id})}><Bookmark
                                fill={data.saved ? '' : 'white'} size={25}/></Toggle>
                    </div>
              </div>
            </span>

        </div>
    </>
}
