import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams } from "react-router-dom";
import useKost from "@/hooks/useKost";
import { ImageVerifier } from "@/hooks/ImageVerifier";
import home from "@/assets/home.png";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";
import { CalendarForm } from "@/components/ui_elements/CalenderForm";
import ErrorMessageView from "./ErrorMessageView";
import Loading from "@/components/ui_elements/Loading";

const DetailKostView = () => {
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
        <main className="mx-4 md:mx-20 lg:mx-44 py-6 shadow-2xl relative">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="flex flex-col md:w-1/3 w-full gap-4">
              <img
                src={isImageValid ? data?.image_url : home}
                className="object-cover rounded-lg"
                width={400}
                height={211}
              />
              <Card className="w-full md:w-[400px]">
                <CardHeader>
                  <CardTitle>Harga Sewa</CardTitle>
                  <p>
                    <span className="font-bold">Rp. </span>
                    {data?.price}/Tahun
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Tanggal Sewa</Label>
                      <CalendarForm />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="opsi">Opsi Sewa</Label>
                      <Select>
                        <SelectTrigger id="opsi">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="pilih">Pilih</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="grid grid-col gap-2">
                  <Button variant="outline">Tanya Pemilik</Button>
                  <Button>Sewa Sekarang</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="font-bold bg-black text-white px-4 py-2 rounded-md">
                  {data?.gender}
                </span>
              </div>
              <h1 className="text-2xl">{data?.name}</h1>
              <h2 className="text-xl font-bold">{data?.address}</h2>

              <div className="py-4">
                <h2 className="text-xl font-bold border-b-2 border-black">
                  Spesifikasi Kamar
                </h2>
                <p>{data?.specification}</p>
              </div>

              <div className="py-4">
                <h2 className="text-xl font-bold border-b-2 border-black">
                  Fasilitas Kamar
                </h2>
                <div className="flex flex-row gap-4">
                  <p>{data?.facility}</p>
                </div>
              </div>

              <div className="py-4">
                <h2 className="text-xl font-bold border-b-2 border-black">
                  Peraturan Kost
                </h2>
                <p>{data?.rule}</p>
              </div>

              <div className="py-4">
                <h2 className="text-xl font-bold border-b-2 border-black">
                  Lokasi Kost
                </h2>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default DetailKostView;
