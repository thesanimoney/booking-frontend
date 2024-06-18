import Slider from "@/components/slider";
import {sliderData} from "@/data/data.ts";
import Landlord, {MainFeatures} from "@/components/propertyDetails";
import TypographyP from "@/components/typography/TypographyP.tsx";

function PropertyPage() {
const text = 'Lorem ipsum1 dolor sit amet, consectetur adipisicing elit. Aliquam fuga placeat quidem. et, consectetur adipisicing elit. Aliquam fuga placeat quidem. At consequuntur delectus, deleniti eveniet excepturi, illo impedit inventore maxime nam quae quod similique, et, consectetur adipisicing elit. Aliquam fuga placeat quidem. tenetur veritatis vero voluptates.'
    return <>
        <section className={'grid grid-cols-1 lg:grid-cols-5 mb-10'}>
            <div className={'col-span-3'}>
                <Slider images={sliderData}/>
                 <div className={'grid grid-cols-6 gap-2 mt-10'}>
                    <div className={'col-span-6 lg:col-span-4'}>
                         <MainFeatures/>
                    </div>
                    <div className={'col-span-2 p-2 justify-start'}>
                         <Landlord/>
                    </div>
                     <div className={'col-span-6 mt-5'}>
                         <TypographyP text={text}/>
                     </div>
                 </div>
            </div>
            <div className="col-span-2">
            </div>
        </section>
</>
}

export default PropertyPage;