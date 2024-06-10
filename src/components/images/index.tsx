import {skyscraper, skyscraperDark} from "@/data/data.ts";
import './images.css'
import '../../index.css'

const Images = () => {
    return (
        <section className="gridTwoColumns gap-4 p-4">
            <img
                src={skyscraper}
                alt="Image 1"
                className="overlayed-images -translate-y-10 translate-x-20"
            />
            <img
                src={skyscraperDark}
                alt="Image 2"
                className="overlayed-images translate-y-10"
            />
        </section>
    );
}

export default Images;
