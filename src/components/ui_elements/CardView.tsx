import { useNavigate } from "react-router-dom";
import home from "@/assets/home.png";
import { Kost } from "@/models/Kost";
import useImageVerifier from "@/hooks/imageVerifier";
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
  const isImageVerifier = useImageVerifier(kost.image_url);

  return (
    <Card
      className="w-[380px] cursor-pointer"
      onClick={() => navigate(`/detail-kost/${kost?.id}`)}
    >
      <CardHeader>
        <CardTitle>{kost?.name}</CardTitle>
        <CardDescription>Rp. {kost?.price}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <img
          src={isImageVerifier ? kost.image_url : home}
          className="object-contain w-36 h-40"
          alt={kost?.name}
        />
      </CardContent>
      <CardContent>
        <p>Specification: {kost?.specification}</p>
        <p>Rule: {kost?.rule}</p>
        <p>Address: {kost?.address}</p>
        <p>Facility: {kost?.facility}</p>
      </CardContent>
    </Card>
  );
};

export default CardView;
