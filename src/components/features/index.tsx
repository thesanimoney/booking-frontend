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

interface FeatureItem {
    title?: string
    icon: LucideIcon
    desc: string
    isTitle?: boolean
}

function PropertyFeatures() {
    return <>
        <div className="grid grid-cols-1">
            <Card className="flex flex-col gap-y-5 outline-1 py-2 px-5">
                <TypographyH3 text={'General'}/>
              <FeatureItem icon={Cog} desc={'Renter is responsible'} title={'Utilities'}/>
              <FeatureItem icon={Cat} desc={'Pets allowed'} title={'Pet Policy'}/>
              <FeatureItem icon={HandCoinsIcon} desc={'Must have 3x the rent household income'} title={'Utilities'}/>
            </Card>
            </div>
            <Card className="flex flex-col gap-y-5 py-2 px-5 mt-5">
                <TypographyH3 text={'Room Sizes'}/>
                 <div className={'flex justify-between'}>
                     <FeatureItem icon={Square} desc={'80sqm (861sqft)'}/>
                     <FeatureItem icon={BedDoubleIcon} desc={'2 bed'}/>
                     <FeatureItem icon={BathIcon} desc={'1 bathroom'}/>
                 </div>
                </Card>
            <Card className="flex flex-col gap-y-5 py-2 px-5 mt-5">
                <TypographyH3 text={'Nearby Places'}/>
               <div className={'flex justify-between'}>
                    <FeatureItem icon={SchoolIcon} desc={'250m away'} title={'School'}/>
                     <FeatureItem icon={BusIcon} desc={'100m away'} title={'Bus station'}/>
                     <FeatureItem icon={UtensilsIcon} desc={'50m away'} title={'Restaurant'}/>
               </div>
            </Card>
            <div className="flex flex-col gap-y-5 mt-5 py-2 px-5">
                <TypographyH3 text={'Location'}/>
                <div className="w-full">
                    <MapMini/>
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