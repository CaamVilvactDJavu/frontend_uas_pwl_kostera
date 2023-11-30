import { useNavigate } from "react-router-dom";
import home from "@/assets/home.png";
import { Kost } from "@/models/Kost";
import { ImageVerifier } from "@/hooks/ImageVerifier";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";

const CardView: React.FC<{
  kost: Kost;
}> = ({ kost }) => {
  const navigate = useNavigate();
  const isImageValid = ImageVerifier(kost.image_url);

  return (
    <Card
      className="w-[350px] cursor-pointer"
      onClick={() => navigate(`/detail-kost/${kost?.id}`)}
    >
      <CardHeader>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-start">
            <CardTitle>{kost?.name}</CardTitle>
            <CardDescription>{kost?.address}</CardDescription>
          </div>
          <div className="flex items-center">
            <CardDescription>
              <span className="inline-flex items-center gap-2">
                <Icon icon="ph:star-fill" color="#ffb000" />
                <span className="font-bold">{kost?.rating} / 5</span>
              </span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex justify-center">
        <img
          src={isImageValid ? kost.image_url : home}
          className="rounded-xl w-full h-full"
          alt={kost?.name}
        />
      </CardContent>
      <CardContent>
        <CardDescription>
          <div className="mb-4">
            <span className="font-bold text-white bg-slate-800 py-2 px-4 rounded-md">
              {kost?.gender}
            </span>
          </div>
          <div>
            <span className="font-bold">Rp. </span>
            {kost?.price}
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardView;
