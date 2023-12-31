import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import useKost from "@/hooks/useKost";
import { ImageVerifier } from "@/hooks/ImageVerifier";
import home from "@/assets/home.png";
import { Button } from "@/components/ui/button";
import ErrorMessageView from "./ErrorMessageView";
import Loading from "@/components/ui_elements/Loading";
import { useEffect } from "react";
import { Kost } from "@/models/Kost";
import { Img } from "react-image";
import { Icon } from "@iconify/react";

const DetailKostView: React.FC<{ kost: Kost }> = ({ kost }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      const userRole = localStorage.getItem("role");
      if (userRole === "admin" || userRole === "user") {
        // toast.success("Berhasil masuk.");
      } else {
        navigate(`/detail-kost/${kost?.id}`);
      }
    } else {
      navigate("/login");
    }
  }, [kost?.id, navigate]);

  const { id = "" } = useParams();

  const { data, error, isLoading } = useKost({ id: id });

  const isImageValid = ImageVerifier(data?.image_url);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorMessageView />
      ) : (
        <main className="mx-4 md:mx-20 lg:mx-44 py-6 relative">
          <div className="flex flex-col md:flex-col lg:flex-row justify-center">
            <div className="flex flex-col lg:pr-10 md:pr-5">
              <Img
                src={isImageValid ? data?.image_url : home}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <div className="my-4">
                <span className="font-bold bg-black text-white px-4 py-2 rounded-md">
                  {data?.gender}
                </span>
              </div>
              <h1 className="text-2xl">{data?.name}</h1>
              <h2 className="text-xl font-bold">{data?.address}</h2>
              <span className="inline-flex items-center gap-2">
                <Icon icon="ph:star-fill" color="#ffb000" />
                <span className="font-bold">{data?.rating} / 5</span>
              </span>

              <div className="p-2 my-2 rounded-xl shadow-2xl border border-black">
                <div>
                  <h2 className="text-xl font-bold">Spesifikasi Kamar</h2>
                  <p>{data?.specification}</p>
                </div>
                <div className="py-4">
                  <h2 className="text-xl font-bold">Fasilitas Kamar</h2>
                  <div className="flex flex-row gap-4">
                    <p>{data?.facility}</p>
                  </div>
                </div>
                <div className="py-4">
                  <h2 className="text-xl font-bold">Peraturan Kost</h2>
                  <p>{data?.rule}</p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Harga Sewa</CardTitle>
                    <p>
                      <span className="font-bold">Rp. </span>
                      {data?.price}/Tahun
                    </p>
                  </CardHeader>
                  <CardFooter className="grid grid-rows">
                    <Button>
                      <a href="https://wa.me/6285162614010">Tanya Pemilik</a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default DetailKostView;
