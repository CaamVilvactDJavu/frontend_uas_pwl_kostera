import { Input } from "@/components/ui/input";
import CardView from "@/components/ui_elements/CardView";
import useKosts from "@/hooks/useKosts";
import { Kost } from "@/models/Kost";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const CariKostView = () => {
  const { data, error, isLoading } = useKosts();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredData = data?.filter((kost: Kost) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase().replace(/\s/g, ""); // Remove spaces
    const normalizeString = (str: string) =>
      str.toLowerCase().replace(/\s/g, ""); // Helper function

    return (
      normalizeString(kost.name).includes(lowercaseSearchTerm) ||
      normalizeString(kost.address).includes(lowercaseSearchTerm) ||
      normalizeString(kost.gender).includes(lowercaseSearchTerm) ||
      normalizeString(kost.price.toString()).includes(lowercaseSearchTerm)
    );
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-3xl font-bold">
          <p>Loading</p>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error : {error.message}</div>;
  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center text-3xl font-bold">
            <p>Loading</p>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
      ) : error ? (
        <div>Error : {error.message}</div>
      ) : (
        <main className="rounded-3xl mx-4 md:mx-20 lg:mx-40 mt-6 mb-6 p-6 space-y-6">
          <div className="flex flex-row w-1/3 gap-2">
            <Input
              placeholder="Cari/Booking Kost (nama, alamat, harga, jenis kelamin)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button>Submit</Button>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-rows ">
            {filteredData?.map((kost: Kost) => (
              <CardView key={kost.id} kost={kost} />
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default CariKostView;
