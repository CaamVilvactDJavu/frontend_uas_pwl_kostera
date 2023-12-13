import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { mutate } from "swr";
import useKost from "@/hooks/useKost";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/api/config";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useEffect } from "react";

type Inputs = {
  id: number;
  name: string;
  price: number;
  rating: number;
  gender: string;
  specification: string;
  rule: string;
  address: string;
  facility: string;
  image_url: string;
};

const EditKost = () => {
  const { id = "" } = useParams<{ id: string }>();

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

  const { data, isLoading, error } = useKost({ id: id });

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data.id = Number(id);
    console.log(data);
    try {
      data.price = Number(data.price);
      data.rating = Number(data.rating);
      await axiosInstance.put("api/v1/kost/", data);
      mutate("http://localhost:5173/api/v1/kost/");
      navigate("/edit-kost-view");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <main className="bg-white rounded-3xl mt-2 px-6 py-6 ">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-lg">Edit Kost</h1>
          </div>
          <div className="mt-8">
            <form
              className="flex flex-col items-center mx-auto w-full  max-w-md "
              onSubmit={handleSubmit(onSubmit)}
            >
              <Label htmlFor="name">Kost Name</Label>
              <Input
                type="text"
                id="name"
                defaultValue={data?.name}
                {...register("name", { required: true })}
              />

              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                id="price"
                defaultValue={data?.price}
                {...register("price", { required: true })}
              />

              <Label htmlFor="rating">Rating</Label>
              <Input
                type="number"
                id="rating"
                defaultValue={data?.rating}
                {...register("rating", { required: true })}
              />

              <Label htmlFor="gender">Gender</Label>
              <Input
                type="text"
                id="gender"
                defaultValue={data?.gender}
                {...register("gender", { required: true })}
              />

              <Label htmlFor="specification">Specification</Label>
              <Input
                type="text"
                id="specification"
                defaultValue={data?.specification}
                {...register("specification", { required: true })}
              />

              <Label htmlFor="rule">Rule</Label>
              <Input
                type="text"
                id="rule"
                defaultValue={data?.rule}
                {...register("rule", { required: true })}
              />

              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                id="address"
                defaultValue={data?.address}
                {...register("address", { required: true })}
              />

              <Label htmlFor="facility">Facility</Label>
              <Input
                type="text"
                id="facility"
                defaultValue={data?.facility}
                {...register("facility", { required: true })}
              />

              <Label htmlFor="image_url">Kost Image Url</Label>
              <Input
                type="text"
                id="image_url"
                defaultValue={data?.image_url}
                {...register("image_url", { required: true })}
              />

              <Button type="submit" className="mt-4 w-full">
                Edit
              </Button>
            </form>
          </div>
        </main>
      )}
    </>
  );
};

export default EditKost;
