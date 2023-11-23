import { Img } from "react-image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const DetailKostView = () => {
  return (
    <main className="rounded-3xl mx-4 md:mx-20 lg:mx-40 mt-6 mb-6 p-6 space-y-6">
      <div className="flex flex-row justify-center gap-12">
        <div className="flex flex-col gap-4">
          <Img src={"/images/images-1.jpg"} width={350} height={211} />{" "}
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Harga Sewa</CardTitle>
              <CardDescription>Rp.6.500.000,-/Tahun</CardDescription>
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
          <p className="outline-black">Wanita</p>
          <h1 className="text-2xl">Kost Anggrek Airan Raya, Lampung Selatan</h1>
          <h2 className="text-xl font-bold">Kec. Jati Agung</h2>

          <div className="py-4">
            <h2 className="text-xl font-bold border-b-2 border-black">
              Spesifikasi Kamar
            </h2>
            <p>4x4 Meter</p>
            <p>Termasuk Listrik</p>
          </div>

          <div className="py-4">
            <h2 className="text-xl font-bold border-b-2 border-black">
              Fasilitas Kamar
            </h2>
            <div className="flex flex-row gap-4">
              <p>Kasur</p>
              <p>Guling</p>
              <p>Bantal</p>
            </div>
          </div>

          <div className="py-4">
            <h2 className="text-xl font-bold border-b-2 border-black">
              Peraturan Kost
            </h2>
            <p>Akses 24 Jam</p>
            <p>Khusus Mahasiswa & Karyawan</p>
            <p>Tipe ini bisa diisi maks. 1 orang/ kamar</p>
            <p>Tamu dilarang menginap</p>
          </div>

          <div className="py-4">
            <h2 className="text-xl font-bold border-b-2 border-black">
              Lokasi Kost
            </h2>
            <Img src={"/images/images-1.jpg"} width={350} height={211} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailKostView;
