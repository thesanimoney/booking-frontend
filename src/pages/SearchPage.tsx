import {PropertyCard} from "@/components/propertyCard";
import {SearchFields} from "@/components/searchProperty";

function SearchPage() {
    return <>
      <div className="mb-10">
           <SearchFields/>
      </div>
        <PropertyCard/>
    </>
}

export default SearchPage;