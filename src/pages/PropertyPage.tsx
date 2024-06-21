import Slider from "@/components/slider";
import {sliderData} from "@/data/data.ts";
import Landlord, {MainFeatures} from "@/components/propertyDetails";
import TypographyP from "@/components/typography/TypographyP.tsx";
import PropertyFeatures from "@/components/features";
import {useParams} from "react-router-dom";
import {GetPost} from "@/hooks/posts/getPost.ts";

function PropertyPage() {
    const {id} = useParams();
    const {data, error} = GetPost(id!);

    if (!data) return <TypographyP text={error?.response?.data as string}/>;

    return <>
        <section className={'grid grid-cols-1 gap-x-5 lg:grid-cols-5 mb-10'}>
            <div className={'col-span-3'}>
                <Slider images={sliderData}/>
                <div className={'grid grid-cols-6 gap-2 mt-10'}>
                    <div className={'col-span-6 lg:col-span-4'}>
                        <MainFeatures data={data}/>
                    </div>
                    <div className={'col-span-2 p-2 justify-start'}>
                        <Landlord email={data.email} username={data.username}/>
                    </div>
                    <div className={'col-span-6 mt-5'}>
                        <TypographyP text={data.desc}/>
                    </div>
                </div>
            </div>
            <section className="col-span-3 lg:col-span-2 mt-5 lg:mt-0">
                <PropertyFeatures data={data}/>
            </section>
        </section>
    </>
}

export default PropertyPage;