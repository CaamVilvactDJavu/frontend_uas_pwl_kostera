import { useEffect, useState } from "react";

const useImageVerifier = (imageUrl: string) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsValid(true);
    img.onerror = () => setIsValid(false);
  }, [imageUrl]);

  return isValid;
};

export default useImageVerifier;
