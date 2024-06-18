import {MapPin} from "lucide-react";
import TypographyP from "@/components/typography/TypographyP.tsx";

interface Props {
    location: string;
}

function Location({location}: Props) {
    return <>
 <span className={'flex gap-x-3 items-center'}>
          <MapPin/>
          <TypographyP text={location}/>
 </span>
    </>
}

export default Location;