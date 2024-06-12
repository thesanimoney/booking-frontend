import {SearchFields} from "@/components/searchProperty";
import {PropertyCard} from "@/components/propertyCard";
import {GreyMap} from "@/components/map";

function SearchPage() {
    return <>
        <section className="grid grid-cols-1 lg:grid-cols-8 gap-3">
            <div className="mb-5 col-span-1 lg:col-span-5" style={{zIndex: 2}}>
                <SearchFields/>
                <div className="mt-5">
                    <PropertyCard/>
                </div>
                <div className="mt-5">
                    <PropertyCard/>
                </div>
                <div className="mt-5">
                    <PropertyCard/>
                </div>
            </div>
            <section className={'bg-secondary hidden lg:block col-span-1 lg:col-span-3 rounded-md max-h-[700px]'} style={{zIndex: 1}}>
            <GreyMap/>
            </section>
        </section>
    </>
}

export default SearchPage;