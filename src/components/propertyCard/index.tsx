import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Bath, Bed, MapPin} from "lucide-react";
import TypographyP from "@/components/typography/TypographyP.tsx";
import {Badge} from "@/components/ui/badge"


export function PropertyCard() {
    return (
        <Card className="w-full grid sm:grid-cols-2 rounded-xl">
            <img className="object-fill w-full h-full rounded-t-xl md:rounded-l-xl md:rounded-tr-none" src="src/assets/dalle.webp"
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
                <CardFooter className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2">
                    <Badge className={'text-sm rounded-md'} variant="secondary"><Bed className={'mr-2'}/> 2 Bedrooms</Badge>
                    <Badge className={'text-sm rounded-md'} variant="secondary"><Bath className={'mr-2'}/>1 Bathroom</Badge>
                </CardFooter>
                </div>
        </Card>
    )
}
