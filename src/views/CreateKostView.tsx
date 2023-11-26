import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { mutate } from "swr";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Inputs = {
  name: string;
  price: number;
  gender: string;
  specification: string;
  rule: string;
  address: string;
  facility: string;
  image_url: string;
};

const CreateKostView = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      data.price = Number(data.price);
      await axios.post("api/v1/kost/", data);
      mutate("api/v1/kost/");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="mt-6 mb-6">
      <div className="flex flex-col items-center justify-center py-6">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-bold text-2xl underline underline-offset-2">
              Create New Kost
            </h1>
          </div>

          <form
            className="flex flex-col items-start gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Label htmlFor="name">Kost Name</Label>
            <Input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />

            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              id="price"
              {...register("price", { required: true })}
            />

            <Label htmlFor="gender">Gender</Label>
            <Input
              type="text"
              id="gender"
              {...register("gender", { required: true })}
            />

            <Label htmlFor="specification">Specification</Label>
            <Input
              type="text"
              id="specification"
              {...register("specification", { required: true })}
            />

            <Label htmlFor="rule">Rule</Label>
            <Input
              type="text"
              id="rule"
              {...register("rule", { required: true })}
            />

            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              {...register("address", { required: true })}
            />

            <Label htmlFor="facility">Facility</Label>
            <Input
              type="text"
              id="facility"
              {...register("facility", { required: true })}
            />
            <Label htmlFor="image_url">Kost Image Url</Label>
            <Input
              type="text"
              id="image_url"
              {...register("image_url", { required: true })}
            />

            <Button type="submit" className="mt-4 w-full">
              Create
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateKostView;
