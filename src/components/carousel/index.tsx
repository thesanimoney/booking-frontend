import {Card, CardContent} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface ImageSlider {
    images: string[]
    startIndex: number
}

export function ImageSlider({images, startIndex}: ImageSlider) {
  const reorderedImages = [...images];

  if (startIndex >= 0 && startIndex < reorderedImages.length) {
    const startElement = reorderedImages.splice(startIndex, 1)[0];
    reorderedImages.unshift(startElement);
  }

    return (
        <Carousel className="w-full">
            <CarouselContent>
                {reorderedImages.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img src={image} alt=""/>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    );
}
