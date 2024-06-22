import PropertyCreate, {BestPractices} from "@/components/propertyCreate.tsx";
import TypographyH1 from "@/components/typography/TypographyH1.tsx";

function CreatePostPage() {

    return <>
        <section className={'grid grid-cols-1 sm:grid-cols-2 gap-x-5'}>
            <div className={'col-span-1 order-2 sm:order-1 mb-10'}>
                <div className={'mb-10'}>
                    <TypographyH1 text={'Post your place to stay.'}/>
                </div>
                <PropertyCreate/>
            </div>
            <div className={'col-span-1 order-1 sm:order-2 mb-10'}>
            <BestPractices/>
            </div>
        </section>
    </>
}

export default CreatePostPage;