import { useNavigate } from "react-router-dom";
import home from "@/assets/home.png";
import { Kost } from "@/models/Kost";
import imageVerifier from "@/hooks/imageVerifier";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardView: React.FC<{
  kost: Kost;
}> = ({ kost }) => {
  const navigate = useNavigate();
  const isImageVerifier = imageVerifier(kost.image_url);

  return (
    <Card
      className="w-[350px] cursor-pointer"
      onClick={() => navigate(`/detail-kost/${kost?.id}`)}
    >
      <CardHeader>
        <CardTitle>{kost?.name}</CardTitle>
        <CardDescription>{kost?.address}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <img
          src={isImageVerifier ? kost.image_url : home}
          className="rounded-xl w-full h-full"
          alt={kost?.name}
        />
      </CardContent>
      <CardContent>
        <CardDescription>
          <div className="mb-2">
            <span className="font-bold text-white bg-black py-2 px-4 rounded-md">
              {kost?.gender}
            </span>
          </div>
          <br />
          <span className="font-bold">Rp.</span> {kost?.price}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardView;
