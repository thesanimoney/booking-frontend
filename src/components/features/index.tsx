import {TypographyH4} from "@/components/typography/TypographyH4.tsx";
import {
    BathIcon,
    BedDoubleIcon,
    BusIcon,
    Cat,
    Cog,
    HandCoinsIcon,
    LucideIcon,
    SchoolIcon,
    Square,
    UtensilsIcon
} from "lucide-react";
import {TypographyH3} from "@/components/typography/TypographyH3.tsx";
import TypographyP from "@/components/typography/TypographyP.tsx";
import {Card} from "@/components/ui/card.tsx";
import {MapMini} from "@/components/map";
import {Post} from "@/hooks/posts/getPosts.ts";

interface FeatureItem {
    title?: string
    icon: LucideIcon
    desc: string
    isTitle?: boolean
}

interface Props {
    data: Post
}

function PropertyFeatures({data}: Props) {
    return <>
        <div className="grid grid-cols-1">
            <Card className="flex flex-col gap-y-5 outline-1 py-2 px-5">
                <TypographyH3 text={'General'}/>
              <FeatureItem icon={Cog} desc={'Renter is responsible'} title={'Utilities'}/>
              <FeatureItem icon={Cat} desc={data.pet ? 'Pets allowed' : 'Pets don\'\t allowed'} title={'Pet Policy'}/>
              <FeatureItem icon={HandCoinsIcon} desc={`Must have ${data.income}x the rent household income`} title={'Utilities'}/>
            </Card>
            </div>
            <Card className="flex flex-col gap-y-5 py-2 px-5 mt-5">
                <TypographyH3 text={'Room Sizes'}/>
                 <div className={'flex flex-col gap-y-5 md:flex-row justify-between'}>
                     <FeatureItem icon={Square} desc={`${data.size}sqm`}/>
                     <FeatureItem icon={BedDoubleIcon} desc={`${data.bedroom} bedroom`}/>
                     <FeatureItem icon={BathIcon} desc={`${data.bathroom} bathroom`}/>
                 </div>
                </Card>
            <Card className="flex flex-col gap-y-5 py-2 px-5 mt-5">
                <TypographyH3 text={'Nearby Places'}/>
               <div className={'flex flex-col gap-y-5 md:flex-row justify-between'}>
                    <FeatureItem icon={SchoolIcon} desc={`${data.school}m away`} title={'School'}/>
                     <FeatureItem icon={BusIcon} desc={`${data.bus}m away`} title={'Bus station'}/>
                     <FeatureItem icon={UtensilsIcon} desc={`${data.restoraunt}m away`} title={'Restaurant'}/>
               </div>
            </Card>
            <div className="flex flex-col gap-y-5 mt-5 py-2 px-5">
                <TypographyH3 text={'Location'}/>
                <div className="w-full">
                    {data.latitude && data.longitude ?  <MapMini data={data}/> : <TypographyP text={'Sorry, some error happening'}/>}
                </div>
        </div>
    </>
}

function FeatureItem({title, desc, icon: Icon, isTitle}: FeatureItem) {
    return <div className="flex items-center gap-x-2">
        <Icon/>
        <span>
            {!isTitle && <TypographyH4 text={title!}/>}
            <TypographyP isSecondary={true} text={desc}/>
        </span>
    </div>
}

export default PropertyFeatures;