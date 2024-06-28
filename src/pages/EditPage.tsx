import TypographyH1 from "@/components/typography/TypographyH1.tsx";
import {BestPractices, PropertyEdit} from "@/components/propertyCreate.tsx";

function EditPage() {
    return <>
        <section className={'grid grid-cols-1 sm:grid-cols-2 gap-x-5'}>
            <div className={'col-span-1 order-2 sm:order-1 mb-10'}>
                <div className={'mb-10'}>
                    <TypographyH1 text={'Edit your property to stay.'}/>
                </div>
                <PropertyEdit/>
            </div>
            <div className={'order-1 sm:order-2'}>
                <BestPractices text={'Best practices for post updating!'}/>
            </div>
        </section>
    </>
}

export default EditPage;