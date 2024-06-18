import styles from './slider.module.css'

interface Props {
    images: string[]
}

function Slider({ images }: Props) {
    return <>
        <section className={styles.slider}>
                <div className={styles.bigImage}>
                    <img src={images[0]} alt="image"/>
                </div>
                <div className={styles.smalImages}>
                    {images.slice(1).map((item, index) => <img key={index} src={item} alt="image"/>)}
                </div>
        </section>
    </>
}

export default Slider;