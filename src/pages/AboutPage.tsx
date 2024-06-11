import TypographyH1 from "@/components/typography/TypographyH1.tsx";
import TypographyP from "@/components/typography/TypographyP.tsx";
import {ImageTextContainer} from "@/components/images";

function AboutPage() {
    const mission = 'At Sani Estate, our mission is to revolutionize the way people experience travel and accommodation. We believe that every journey should be seamless, stress-free, and memorable. Our goal is to provide a platform that connects travelers with the best accommodations, offering unparalleled convenience, transparency, and choice.'
    return <>
        <div className="mx-auto flex flex-col itemsCenter max-w-[75%] text-center gap-y-5">
            <TypographyH1 text={'About Us'}/>
            <TypographyP text={mission}/>
        </div>
        <div className="mx-auto mt-10 max-w-[75%]">
            <ImageTextContainer/>
        </div>
    </>
}

export default AboutPage;