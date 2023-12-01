import { Input } from "@/components/ui/input";
import CardView from "@/components/ui_elements/CardView";
import useKosts from "@/hooks/useKosts";
import { Kost } from "@/models/Kost";
import { useState } from "react";
import ErrorMessageView from "./ErrorMessageView";
import Loading from "@/components/ui_elements/Loading";
import Pagination from "@/layouts/Pagination";

const CariKostView = () => {
  const { data, error, isLoading } = useKosts();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage) || 1;

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    <ErrorMessageView />;
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorMessageView />
      ) : (
        <main className="rounded-3xl mx-4 md:mx-20 lg:mx-40 mt-6 mb-6 p-6 space-y-6">
          <div className="flex flex-row w-1/3 gap-2">
            <Input
              placeholder="Cari/Booking Kost (nama, alamat, harga, jenis kelamin)"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-rows ">
            {currentItems?.map((kost: Kost) => (
              <CardView key={kost.id} kost={kost} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </main>
      )}
    </>
  );
};

export default CariKostView;
