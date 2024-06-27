import styles from './slider.module.css'
import {X} from "lucide-react";
import {useState} from "react";
import {ImageSlider} from "@/components/carousel";

interface Props {
    images: string[]

}

function Slider({images}: Props) {
    const [startIndex, setStartIndex] = useState<number | null>(null)

    const handleImageClick = (index: number) => {
        setStartIndex(index)
    }

    return <>
        <section className={styles.slider}>
            <div
                onClick={() => handleImageClick(0)}
                className={styles.bigImage}
            >
                <img src={images[0]} alt="image"/>
            </div>
            <div className={styles.smalImages}>
                {images.slice(1).map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        alt="image"
                        onClick={() => handleImageClick(index + 1)}
                    />
                ))}
            </div>
            {startIndex !== null && (
                <div
                    onClick={() => setStartIndex(null)}
                    className="bg-zinc-900 w-full h-full absolute z-10 top-0 left-0 bg-opacity-95 flex justify-center items-center"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative sm:max-w-[60%] opacity-100"
                    >
                        <ImageSlider startIndex={startIndex} images={images}/>
                    </div>
                    <div
                        onClick={() => setStartIndex(null)}
                        className="absolute top-0 right-0 mr-10 mt-10 hover:cursor-pointer hover:text-zinc-600 z-30"
                    >
                        <X size={30}/>
                    </div>
                </div>
            )}
        </section>
    </>
}

export default Slider;