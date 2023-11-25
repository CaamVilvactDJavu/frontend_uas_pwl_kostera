import { useState, useEffect } from "react";

const useImageValid = (imageUrl: string) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    console.log("Image URL:", imageUrl);
  
    const img = new Image();
    img.src = imageUrl;
  
    img.onload = () => setIsValid(true);
    img.onerror = (error) => {
      console.error("Error loading image:", error);
      setIsValid(false);
    };
  }, [imageUrl]);
  

  return isValid;
};

export default useImageValid;
