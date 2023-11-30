import { useEffect, useState } from "react";

export const ImageVerifier = (imageUrl: string) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    console.log("Image URL:", imageUrl);

    const img = new Image();

    img.onload = () => {
      console.log("Image loaded successfully.");
      setIsLoaded(true);
      setHasError(false);
    };
    img.onerror = () => {
      console.log("Failed to load image.");
      setIsLoaded(false);
      setHasError(true);
    };

    img.src = imageUrl;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  return isLoaded && !hasError;
};
