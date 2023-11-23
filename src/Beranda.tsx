import Carousel from "./Carousel";

const Beranda = () => {
  return (
    <>
      <Carousel />
      <div className="mx-4 md:mx-20 lg:mx-44 mt-6 mb-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="scroll-m-20 border-b pb-2 text-8xl font-semibold tracking-tight first:mt-0">
            Rekomendasi Kost Pilihan
          </h1>
        </div>
      </div>
    </>
  );
};

export default Beranda;
