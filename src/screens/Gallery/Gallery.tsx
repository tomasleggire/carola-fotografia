import PhotoAlbum from "react-photo-album";
import image from "../../assets/main-bg.jpg";
import image2 from "../../assets/main-bg2.jpg";
import image3 from "../../assets/main-bg3.jpg";
import image4 from "../../assets/header-bg.jpg";
import "./Gallery.scss";

export default function Gallery() {
  const photos = [
    { src: image, width: 800, height: 600 },
    { src: image2, width: 1000, height: 500 },
    { src: image3, width: 800, height: 600 },
    { src: image4, width: 800, height: 600 },
    { src: image, width: 800, height: 600 },
    { src: image2, width: 1000, height: 500 },
    { src: image3, width: 800, height: 600 },
    { src: image4, width: 800, height: 600 },
    { src: image, width: 800, height: 600 },
    { src: image2, width: 1000, height: 500 },
    { src: image3, width: 800, height: 600 },
    { src: image4, width: 800, height: 600 },
  ];

  return (
    <div className="gallery" id="gallery">
      <div className="gallery-album">
        <PhotoAlbum
          photos={photos}
          layout="columns"
          padding={0}
          spacing={10}
          columns={(containerWidth) => {
            if (containerWidth < 800) return 1;
            return 2;
          }}
          // onClick={({ index }) => {
          //   console.log(index);
          // }}
        />
      </div>
    </div>
  );
}
