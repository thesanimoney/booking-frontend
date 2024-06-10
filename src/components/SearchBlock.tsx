import TypographyH1 from "@/components/typography/TypographyH1.tsx";
import TypographyP from "@/components/typography/TypographyP.tsx";
import SearchForm from "@/components/SearchForm.tsx";
import Achivement from "@/components/Achivement.tsx";
import ImageBlock from "@/components/ImageBlock.tsx";

function SearchBlock() {
    const text = 'Discover your dream home with our premier real estate services. Whether you\'re seeking a cozy apartment in the heart of the city or a spacious villa nestled in serene countryside, our team is dedicated to finding the perfect property to suit your lifestyle.'

    return <>
        <div className="mx-auto grid-cols-1 grid">
            <div>
                <TypographyH1 text={'Find Real Estate & Rent Apartment of Your Dream'}/>
                <p className={'mt-10 mb-10'}><TypographyP isSecondary={true} text={text}/></p>
            </div>
            <div className="mx-auto mb-10 py-5 md:hidden -translate-x-10">
                <ImageBlock/>
            </div>
            <div className="mx-auto md:hidden mb-10">
                <SearchForm/>
            </div>
            <div className="mx-auto mb-5 hidden md:block">
                <SearchForm/>
            </div>
            <div className="col-auto">
                <Achivement/>
            </div>
        </div>
    </>
}

export default SearchBlock;