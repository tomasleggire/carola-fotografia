import { useState, useEffect } from "react";
import "./Home.scss";
import imageHome from "../../assets/main-bg.jpg";
import imageHome2 from "../../assets/main-bg2.jpg";
import imageHome3 from "../../assets/main-bg3.jpg";

export default function Home() {
  const imagesForHome = [imageHome, imageHome2, imageHome3];
  const [currentImg, setCurrentImg] = useState(imagesForHome[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prevImg) => {
        const currentIndex = imagesForHome.indexOf(prevImg);
        return imagesForHome[(currentIndex + 1) % imagesForHome.length];
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home" id="home">
      <div className="bg-home img-fade">
        <img src={currentImg} alt="Imagen de Inicio" />
      </div>
    </div>
  );
}
