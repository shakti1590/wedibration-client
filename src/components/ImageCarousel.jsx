import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import 'tailwindcss/tailwind.css';

const ImageCarousel = ({ images }) => {

  return (
    <div className="w-full h-[480px] rounded-md overflow-hidden">
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                className="w-full h-[480px] object-cover"
                src={image.url}
                alt={`Image ${index + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer">
          &#10094;
        </CarouselPrevious>
        <CarouselNext className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer">
          &#10095;
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

