import { Img } from "react-image";
import Carousel from "./Carousel";
import { Icon } from "@iconify/react";

const Beranda = () => {
  return (
    <>
      <Carousel />
      <div className="mx-4 md:mx-20 lg:mx-44 mt-6 mb-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold pb-4">
            Rekomendasi Kost Pilihan
          </h1>
          <div className="grid grid-cols-3 grid-flow-row gap-20">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <Img src={"/images/images-1.jpg"} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Kos Anggrek Airan Raya, Lampung Selatan
                </h2>
                <div className="flex flex-row items-center">
                  <span className="font-bold rounded-md outline outline-black mr-8 px-6 ">
                    Wanita
                  </span>
                  <Icon icon="material-symbols:star" />
                  <p className="px-2">4/5</p>
                </div>
                <div className="card-actions justify-end font-bold">
                  Rp.6.500.000,-/Tahun
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <Img src={"/images/images-1.jpg"} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Kos Anggrek Airan Raya, Lampung Selatan
                </h2>
                <div className="flex flex-row items-center">
                  <span className="font-bold rounded-md outline outline-black mr-8 px-6 ">
                    Wanita
                  </span>
                  <Icon icon="material-symbols:star" />
                  <p className="px-2">4/5</p>
                </div>
                <div className="card-actions justify-end font-bold">
                  Rp.6.500.000,-/Tahun
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <Img src={"/images/images-1.jpg"} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Kos Anggrek Airan Raya, Lampung Selatan
                </h2>
                <div className="flex flex-row items-center">
                  <span className="font-bold rounded-md outline outline-black mr-8 px-6 ">
                    Wanita
                  </span>
                  <Icon icon="material-symbols:star" />
                  <p className="px-2">4/5</p>
                </div>
                <div className="card-actions justify-end font-bold">
                  Rp.6.500.000,-/Tahun
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <Img src={"/images/images-1.jpg"} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Kos Anggrek Airan Raya, Lampung Selatan
                </h2>
                <div className="flex flex-row items-center">
                  <span className="font-bold rounded-md outline outline-black mr-8 px-6 ">
                    Wanita
                  </span>
                  <Icon icon="material-symbols:star" />
                  <p className="px-2">4/5</p>
                </div>
                <div className="card-actions justify-end font-bold">
                  Rp.6.500.000,-/Tahun
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <Img src={"/images/images-1.jpg"} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Kos Anggrek Airan Raya, Lampung Selatan
                </h2>
                <div className="flex flex-row items-center">
                  <span className="font-bold rounded-md outline outline-black mr-8 px-6 ">
                    Wanita
                  </span>
                  <Icon icon="material-symbols:star" />
                  <p className="px-2">4/5</p>
                </div>
                <div className="card-actions justify-end font-bold">
                  Rp.6.500.000,-/Tahun
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <Img src={"/images/images-1.jpg"} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Kos Anggrek Airan Raya, Lampung Selatan
                </h2>
                <div className="flex flex-row items-center">
                  <span className="font-bold rounded-md outline outline-black mr-8 px-6 ">
                    Wanita
                  </span>
                  <Icon icon="material-symbols:star" />
                  <p className="px-2">4/5</p>
                </div>
                <div className="card-actions justify-end font-bold">
                  Rp.6.500.000,-/Tahun
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
