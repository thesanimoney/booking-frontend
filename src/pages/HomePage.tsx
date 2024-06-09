import SearchBlock from "@/layout/SearchBlock.tsx";
import ImageBlock from "@/layout/imageBlock.tsx";

function HomePage() {
    return <>
      <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="col-auto mb-10 md:mb-0">
              <SearchBlock/>
          </div>
          <div className="col-auto hidden md:block translate-y-10">
              <ImageBlock/>
          </div>
      </div>
    </>
}

export default HomePage;