const ImageSection = () => {
    return (
        <section className="grid grid-cols-2 gap-4 p-4">
            <img
                src="src/assets/skyscrapper1.jpg"
                alt="Image 1"
                className="w-full h-auto rounded-lg shadow-2xl drop-shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-125 -translate-y-10 translate-x-20"
            />
            <img
                src="src/assets/skyscrapperNight.jpg"
                alt="Image 2"
                className="w-full h-auto rounded-lg shadow-2xl drop-shadow-2xl transform transition-transform duration-300 ease-in-out translate-y-10 hover:scale-125"
            />
        </section>
    );
}

export default ImageSection;
