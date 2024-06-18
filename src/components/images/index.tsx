import './images.css'
import '../../index.css'
import {TypographyH3} from "@/components/typography/TypographyH3.tsx";
import TypographyP from "@/components/typography/TypographyP.tsx";

const Images = () => {
    return (
        <section className="gridTwoColumns gap-4 p-4">
            <img
                src={'/assets/skyscrapper1.webp'}
                alt="Image 1"
                className="overlayed-images -translate-y-10 translate-x-20"
            />
            <img
                src={'/assets/skyscrapperNight.webp'}
                alt="Image 2"
                className="overlayed-images translate-y-10"
            />
        </section>
    );
}

export function ImageTextContainer() {
    const vision = 'We constantly innovate and improve our platform to meet the evolving needs of travelers and hosts, leveraging cutting-edge technology to enhance the booking process.'
    return <>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-secondary rounded-xl items-center">
            <div className="col-auto p-5">
                <div className="mb-5">
                    <TypographyH3 text={'Our vision at Sani Estate'}/></div>
                <TypographyP text={vision}/>
            </div>
            <div className="col-auto">
                <img src="../../../public/static/assets/dalle.webp" alt="dalle"
                     className="rounded-b-xl md:rounded-r-xl md:rounded-l-none h-[200px] w-[100%] md:w-[100%] md:h-[100%]"/>
            </div>
        </div>
    </>
}

export default Images;
