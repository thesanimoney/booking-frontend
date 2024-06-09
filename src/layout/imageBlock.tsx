import {skyscraper, skyscraperDark} from "@/data/data.ts";

const ImageSection = () => {
    return (
        <section className="grid grid-cols-2 gap-4 p-4">
            <img
                src={skyscraper}
                alt="Image 1"
                className="w-full h-auto rounded-lg shadow-2xl drop-shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-125 -translate-y-10 translate-x-20"
            />
            <img
                src={skyscraperDark}
                alt="Image 2"
                className="w-full h-auto rounded-lg shadow-2xl drop-shadow-2xl transform transition-transform duration-300 ease-in-out translate-y-10 hover:scale-125"
            />
        </section>
    );
}

export default ImageSection;
