import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams } from "react-router-dom";
import useKost from "@/hooks/useKost";
import useImageValid from "@/hooks/useImageValid";
import home from "@/assets/home.png";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";

const DetailKostView = () => {
  const { id = "" } = useParams();

  const { data, error, isLoading } = useKost({ id: id });

  const isImageValid = useImageValid(data?.image_url);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <main className="mx-4 md:mx-20 lg:mx-44 mb-6 mt-6 shadow-2xl relative">
          <div className="flex flex-row justify-center gap-12">
            <div className="flex flex-col gap-4">
              <img
                src={isImageValid ? data?.image_url : home}
                className="object-cover rounded-lg"
                width={350}
                height={211}
              />
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Harga Sewa</CardTitle>
                  <span className="font-semibold">Rp.</span>
                  {data?.price}
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Tanggal Sewa</Label>
                        <Input id="name" placeholder="Tanggal Sewa" />
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
                  </form>
                </CardContent>
                <CardFooter className="grid grid-col gap-2">
                  <Button variant="outline">Tanya Pemilik</Button>
                  <Button>Sewa Sekarang</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex flex-col">
              <p className="outline-black">{data?.gender}</p>
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
