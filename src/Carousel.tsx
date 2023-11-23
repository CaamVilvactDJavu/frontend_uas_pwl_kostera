import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full relative">
        {/* Your existing carousel content */}
        <div id="slide1" className="carousel-item relative w-full blur-md">
          {/* Image 1 */}
          <img
            src="/images/images-1.jpg"
            className="w-full h-full"
            style={{ width: "1920px", height: "562px" }}
            alt="Slide 1"
          />
        </div>
        {/* Add more slides as needed */}

        {/* Centered text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-white text-5xl font-extrabold">
            Mau Cari Atau Booking Kos Dengan Aman dan Mudah?
          </p>
          <div className="flex flex-row gap-2">
            <Input type="search" placeholder="Cari/Booking Kos" />
            <Button type="submit">Cari</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
