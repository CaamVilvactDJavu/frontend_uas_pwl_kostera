import CardView from "@/components/ui_elements/CardView";
import useKosts from "@/hooks/useKosts";
import { Kost } from "@/models/Kost";
import ErrorMessageView from "./ErrorMessageView";
import Loading from "@/components/ui_elements/Loading";
import Pagination from "@/layouts/Pagination";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FavoritKostView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      const userRole = localStorage.getItem("role");
      if (userRole === "admin" || userRole === "user") {
        // toast.success("Berhasil masuk.");
      } else {
        navigate("/favorit-kost");
      }
    } else {
      navigate("/login");
    }
  });

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
        <main className="mx-4 md:mx-20 lg:mx-40 mt-6 mb-6 p-6">
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold pb-4 text-center tracking-widest">
              Favorit
            </h1>
            <div className="mt-8 gap-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 self-center">
              {currentItems?.map((kost: Kost) => (
                <CardView key={kost.id} kost={kost} />
              ))}
            </div>
            <div className="grid items-center justify-center mt-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default FavoritKostView;
