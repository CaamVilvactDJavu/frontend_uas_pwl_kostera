import CardView from "@/components/ui_elements/CardView";
import useKosts from "@/hooks/useKosts";
import { Kost } from "@/models/Kost";

const FavoritKostView = () => {
  const { data, error, isLoading } = useKosts();

  const minRating = 4;

  const filteredData = data?.filter((kost: Kost) => kost.rating >= minRating);

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
    return <div>Error: {error.message}</div>;
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
        <div>Error: {error.message}</div>
      ) : (
        <div className="mx-4 md:mx-20 lg:mx-44 mt-6 mb-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold pb-4">Favorit</h1>
            <div className="mt-8 grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-rows">
              {filteredData?.map((kost: Kost) => (
                <CardView key={kost.id} kost={kost} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FavoritKostView;
