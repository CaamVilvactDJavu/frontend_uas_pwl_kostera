import Carousel from "./Carousel";
import useKosts from "@/hooks/useKosts";
import CardView from "@/components/ui_elements/CardView";
import { Kost } from "@/models/Kost";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ErrorMessageView from "@/views/ErrorMessageView";
import Loading from "@/components/ui_elements/Loading";
import { useEffect } from "react";

const Beranda = () => {
  const { data, error, isLoading } = useKosts();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      const userRole = localStorage.getItem("role");
      if (userRole === "admin" || userRole === "user") {
        // toast.success("Berhasil masuk.");
      } else {
        navigate("/");
      }
    } else {
      navigate("/login");
    }
  });

  const handleFavoritClick = () => navigate("/favorit-kost");

  const minRating = 5;

  const filteredData = data
    ?.filter((kost: Kost) => kost.rating >= minRating)
    .slice(0, 4);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessageView />;
  }

  return (
    <>
      <Carousel />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorMessageView />
      ) : (
        <div className="mx-4 md:mx-20 lg:mx-44 mt-6 mb-6">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold pb-4 tracking-widest">
              Rekomendasi Kost Pilihan
            </h1>
            <div className="mt-8 gap-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 self-center">
              {filteredData?.map((kost: Kost) => (
                <CardView key={kost.id} kost={kost} />
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Button onClick={handleFavoritClick}>Lihat Selengkapnya</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Beranda;
