import imageHome from "../../assets/main-bg.jpg";
import imageHome2 from "../../assets/main-bg2.jpg";
import imageHome3 from "../../assets/main-bg3.jpg";
import Slider from "react-slick";
import "./Home.scss";

export default function Home() {
  const images = [
    {
      img: imageHome,
      alt: "Imagen de fondo de home",
    },
    {
      img: imageHome2,
      alt: "Imagen de fondo de home",
    },
    {
      img: imageHome3,
      alt: "Imagen de fondo de home",
    },
  ];

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
  };

  return (
    <div className="home" id="home">
      <Slider {...settings} className="home-slider">
        {images.map((item, index) => (
          <img src={item.img} alt={item.alt} key={index} />
        ))}
      </Slider>
    </div>
  );
}
