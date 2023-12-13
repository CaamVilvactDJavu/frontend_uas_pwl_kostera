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
        <div>
          <div>
            <CardTitle>{kost?.name}</CardTitle>
            <CardDescription className="line-clamp-2">
              {kost?.address}
            </CardDescription>
          </div>
          <div>
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
          className="rounded-xl w-full h-[250px]"
          alt={kost?.name}
        />
      </CardContent>
      <CardContent>
        <div className="mb-4">
          <span className="font-bold text-white bg-slate-800 py-2 px-4 rounded-md">
            {kost?.gender}
          </span>
        </div>
        <div>
          <span className="font-bold">Rp. </span>
          {kost?.price}/Tahun
        </div>
      </CardContent>
    </Card>
  );
};

export default CardView;
