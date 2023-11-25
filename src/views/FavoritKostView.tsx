import { Img } from "react-image";

const FavoritKostView = () => {
  return (
    <main className="rounded-3xl mx-4 md:mx-20 lg:mx-40 mt-6 mb-6 p-6 space-y-6">
      <div className="flex flex-col justify-center gap-12">
        <h1 className="text-5xl font-bold text-center">Favorit</h1>
        <div className="flex flex-row justify-center">
          <div className="grid grid-cols-2 grid-flow-row gap-20">
            <div className="flex flex-col gap-2 border-b-2 border-black p-4">
              <Img
                className="rounded-xl"
                src={"/images/images-1.jpg"}
                width={350}
                height={211}
              />
              <div className="flex flex-col gap-2">
                <span className="font-bold drop-shadow-2xl">Wanita</span>
                <h1>Kos Anggrek Airan Raya, Lampung Selatan</h1>
                <h2 className="font-bold">Kec. Jati Agung</h2>
                <p>K. Mandi Dalam ·Kloset Duduk ·Kasur ·Akses 24 Jam</p>
                <span className="font-bold text-right">
                  Rp.6.500.000,-/Tahun
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-b-2 border-black p-4">
              <Img
                className="rounded-xl"
                src={"/images/images-1.jpg"}
                width={350}
                height={211}
              />
              <div className="flex flex-col gap-2">
                <span className="font-bold drop-shadow-2xl">Wanita</span>
                <h1>Kos Anggrek Airan Raya, Lampung Selatan</h1>
                <h2 className="font-bold">Kec. Jati Agung</h2>
                <p>K. Mandi Dalam ·Kloset Duduk ·Kasur ·Akses 24 Jam</p>
                <span className="font-bold text-right">
                  Rp.6.500.000,-/Tahun
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-b-2 border-black p-4">
              <Img
                className="rounded-xl"
                src={"/images/images-1.jpg"}
                width={350}
                height={211}
              />
              <div className="flex flex-col gap-2">
                <span className="font-bold drop-shadow-2xl">Wanita</span>
                <h1>Kos Anggrek Airan Raya, Lampung Selatan</h1>
                <h2 className="font-bold">Kec. Jati Agung</h2>
                <p>K. Mandi Dalam ·Kloset Duduk ·Kasur ·Akses 24 Jam</p>
                <span className="font-bold text-right">
                  Rp.6.500.000,-/Tahun
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-b-2 border-black p-4">
              <Img
                className="rounded-xl"
                src={"/images/images-1.jpg"}
                width={350}
                height={211}
              />
              <div className="flex flex-col gap-2">
                <span className="font-bold drop-shadow-2xl">Wanita</span>
                <h1>Kos Anggrek Airan Raya, Lampung Selatan</h1>
                <h2 className="font-bold">Kec. Jati Agung</h2>
                <p>K. Mandi Dalam ·Kloset Duduk ·Kasur ·Akses 24 Jam</p>
                <span className="font-bold text-right">
                  Rp.6.500.000,-/Tahun
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default FavoritKostView;
