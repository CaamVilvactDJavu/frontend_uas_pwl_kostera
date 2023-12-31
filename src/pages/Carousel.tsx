import { Img } from "react-image";

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full relative">
        <div id="slide1" className="carousel-item relative w-full blur-md">
          <Img
            src="/images/images-1.jpeg"
            className="w-full h-full"
            style={{ width: "1920px", height: "562px" }}
            alt="Slide 1"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-white text-5xl font-extrabold tracking-widest">
            Mau Cari Atau Booking Kost Dengan Aman dan Mudah?
          </p>
        </div>
      </div>
    </>
  );
};

export default Carousel;
