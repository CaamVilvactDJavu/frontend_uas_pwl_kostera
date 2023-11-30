import CardView from "@/components/ui_elements/CardView";
import useKosts from "@/hooks/useKosts";
import { Kost } from "@/models/Kost";
import ErrorMessageView from "./ErrorMessageView";
import Loading from "@/components/ui_elements/Loading";
import Pagination from "@/layouts/Pagination";
import { useState } from "react";

const FavoritKostView = () => {
  const { data, error, isLoading } = useKosts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const minRating = 4;

  const filteredData = data?.filter((kost: Kost) => kost.rating >= minRating);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage) || 1;

  const handlePageChange = (page: number) => setCurrentPage(page);

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
        <div className="mx-4 md:mx-20 lg:mx-44 mt-6 mb-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold pb-4">Favorit</h1>
            <div className="mt-8 grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-rows">
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
          </div>
        </div>
      )}
    </>
  );
};

export default FavoritKostView;
