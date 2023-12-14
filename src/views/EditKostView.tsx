import { Input } from "@/components/ui/input";
import useKosts from "@/hooks/useKosts";
import { Kost } from "@/models/Kost";
import { useEffect, useState } from "react";
import ErrorMessageView from "./ErrorMessageView";
import Loading from "@/components/ui_elements/Loading";
import Pagination from "@/layouts/Pagination";
import home from "@/assets/home.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "@/api/config";
import { mutate } from "swr";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const EditKostView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      if (localStorage.getItem("role") === "admin") {
        // toast.success("Berhasil Masuk.");
      } else {
        navigate("/");
      }
    } else {
      navigate("/login");
    }
  });

  const { data, error, isLoading } = useKosts();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);
  const itemsPerPage = 8;

  const filteredData = data?.filter((kost: Kost) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase().replace(/\s/g, "");
    const normalizeString = (str: string) =>
      str.toLowerCase().replace(/\s/g, "");

    return (
      normalizeString(kost.name).includes(lowercaseSearchTerm) ||
      normalizeString(kost.price.toString()).includes(lowercaseSearchTerm) ||
      normalizeString(kost.rating.toString()).includes(lowercaseSearchTerm) ||
      normalizeString(kost.gender).includes(lowercaseSearchTerm) ||
      normalizeString(kost.specification).includes(lowercaseSearchTerm) ||
      normalizeString(kost.rule).includes(lowercaseSearchTerm) ||
      normalizeString(kost.address).includes(lowercaseSearchTerm) ||
      normalizeString(kost.facility).includes(lowercaseSearchTerm)
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

  const handleDelete = (id: number) => {
    setDeleteDialogOpen(true);
    setDeleteTargetId(id);
  };

  const confirmDelete = async () => {
    try {
      await axiosInstance.delete("api/v1/kost/", {
        data: { id: Number(deleteTargetId) },
      });
      await mutate("api/v1/kost/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteDialogOpen(false);
    }
  };

  const cancelDelete = () => {
    setDeleteDialogOpen(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessageView />;
  }

  return (
    <main className="mx-4 md:mx-20 lg:mx-44 mt-6 mb-6">
      <div className="flex flex-col">
        <div className="xl:w-1/3 lg:w-1/2 md:w-1/2">
          <Input
            placeholder="Cari/Booking Kost (nama, alamat, harga, jenis kelamin)"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Id</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Rating</th>
                <th className="py-2 px-4 border-b">Gender</th>
                <th className="py-2 px-4 border-b">Specification</th>
                <th className="py-2 px-4 border-b">Rule</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Facility</th>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((kost: Kost) => (
                <tr key={kost.id}>
                  <td className="py-2 px-4 border-b">{kost?.id}</td>
                  <td className="py-2 px-4 border-b">{kost?.name}</td>
                  <td className="py-2 px-4 border-b">{kost?.price}</td>
                  <td className="py-2 px-4 border-b">{kost?.rating}</td>
                  <td className="py-2 px-4 border-b">{kost?.gender}</td>
                  <td className="py-2 px-4 border-b">{kost?.specification}</td>
                  <td className="py-2 px-4 border-b">{kost?.rule}</td>
                  <td className="py-2 px-4 border-b">{kost?.address}</td>
                  <td className="py-2 px-4 border-b">{kost?.facility}</td>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={kost?.image_url || home}
                      className="rounded-md w-[700px] h-[100px]"
                      alt={kost?.name}
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex flex-col">
                      <Button
                        onClick={() => {
                          navigate("/edit-kost/" + kost.id + "");
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => {
                          handleDelete(kost.id);
                        }}
                        className="mt-4 w-full"
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <AlertDialog open={deleteDialogOpen} onClose={cancelDelete}>
        <AlertDialogTrigger asChild>
          <div></div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this boarding house?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelDelete}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} variant="destructive">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
};

export default EditKostView;
