import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardView from "@/components/ui_elements/CardView";
import useKosts from "@/hooks/useKosts";
import { Kost } from "@/models/Kost";

export const CariKostView = () => {
  const { data, error, isLoading } = useKosts();

  if (isLoading) {
    <div className="flex items-center justify-center h-screen">
      <div className="text-center text-3xl font-bold">
        <p>Loading</p>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </div>;
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
            <Input placeholder="Cari/Booking Kost" />
            <Button>Submit</Button>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-rows ">
            {data?.map((kost: Kost) => <CardView key={kost.id} kost={kost} />)}
          </div>
        </main>
      )}
    </>
  );
};
