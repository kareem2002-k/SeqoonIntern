import { useState } from 'react';
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const PropertyCard = ({ address, images, price, icons, description }: { address: string, images: string[], price: number, icons: JSX.Element[], description: string }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden w-full max-w-sm mx-auto">
      <div className="relative">
        <div className="grid aspect-video items-center overflow-hidden rounded-t-lg">
          <Carousel className="w-full aspect-video">
            <CarouselContent className="aspect-video">
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    alt="Property Image"
                    className="object-cover"
                    height={225}
                    src={image}
                    style={{
                      aspectRatio: "400/225",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="top-1/2 left-2 translate-y-[-50%]" />
            <CarouselNext className="top-1/2 right-2 translate-y-[-50%]" />
          </Carousel>
          <Button className="absolute top-2 right-2 dark:invert" size="sm" variant="outline" onClick={toggleDescription}>
            Details
          </Button>
          {/* Display icons */}
          <div className="absolute bottom-2 left-2 flex gap-2">
            {icons.map((icon, index) => (
              <div key={index}>{icon}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm leading-none">{address}</div>
        <div className="text-2xl font-bold">${price}</div>
        {/* Description */}
        {showDescription && (
          <div className="mt-2 text-sm">{description}</div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
