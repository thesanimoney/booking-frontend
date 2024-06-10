import Images from "@/components/images";
import {SearchPropertySection} from "@/components/searchProperty";

function HomePage() {
    return <>
      <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="col-auto mb-10 md:mb-0">
              <SearchPropertySection/>
          </div>
          <div className="col-auto hidden md:block translate-y-10">
              <Images/>
          </div>
      </div>
    </>
}

export default HomePage;