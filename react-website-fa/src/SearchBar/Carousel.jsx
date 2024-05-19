// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Carousel() {
//   const [imageUrls, setImageUrls] = useState([]);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   useEffect(() => {
//     const fetchImages = async () => {
//       const listRef = ref(storage, "gs://uploadimage-2ed90.appspot.com/team logos");

//       try {
//         const res = await listAll(listRef);
//         const urls = await Promise.all(
//           res.items.map((item) => getDownloadURL(item))
//         );
//         setImageUrls(urls);
//       } catch (error) {
//         console.error("Error fetching images: ", error);
//       }
//     };
//     fetchImages();
//   }, []);

//   return (
//     <div>
//     <Slider {...settings}>
//         <div>
//           {imageUrls.map((url, index) => (
//             <div className='images'>
//             <img src={url}/>
//             Arsenal
//       </div>
//           ))}
//         </div>

//     </Slider>
//     </div>
//   );
// }

// export default Carousel;

import "slick-carousel/slick/slick.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const urls = [
  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FAFC%20Bournemouthe.png?alt=media&token=44885748-6a2c-4ce5-8ea9-b8acba942f7d",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FArsenal%20FC.png?alt=media&token=7eb4588e-4ee6-4bf7-ae37-b5e57c6b0c8c",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FAston%20Villa.png?alt=media&token=c3728c3c-99ee-497c-b6f1-693197ea32c1",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FBrentford%20FC.png?alt=media&token=c36c86de-47bc-43a7-8ccd-e10ad7c275e4",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FBrighton%20%26%20Hove%20Albion.png?alt=media&token=74165439-3618-41ae-af0a-f14911ff0aa5",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FBurnley%20FC.png?alt=media&token=3e6b26e7-fd1a-4c6a-9bf5-d7ef2e64007b",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FChelsea%20FC.png?alt=media&token=ad689209-4aaa-42c7-bc91-2e807e5f58a2",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FCrystal%20Palace.png?alt=media&token=42d69e89-52e5-4f5b-bd47-feaf37f11ab6",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FEverton%20FC.png?alt=media&token=79784a36-6eb9-4455-b172-a0223367aabc",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FFulham%20FC.png?alt=media&token=538d3bf2-2ca4-4419-9d2d-2541b0cd4afe",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FLiverpool%20FC.png?alt=media&token=079cbfb2-f83b-4de5-bdac-3d24e1eb9aa0",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FLuton%20Town.png?alt=media&token=384dfd98-4674-48d1-a705-c8efec1e634e",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FManchester%20City.png?alt=media&token=5b0b9886-f87c-42b5-a33a-e24cc67a4f71",

  "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FManchester%20United.png?alt=media&token=40c3c6ef-4be4-4f83-8b7c-553028958f72",
];

const imgs = [
  {
    name: "Bournemouthe",
    img: "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FAFC%20Bournemouthe.png?alt=media&token=44885748-6a2c-4ce5-8ea9-b8acba942f7d",
  },
  {
    name: "Arsenal FC",
    img: "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FArsenal%20FC.png?alt=media&token=7eb4588e-4ee6-4bf7-ae37-b5e57c6b0c8c",
  },
  {
    name: "Aston Villa",
    img: "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/team%20logos%2FAston%20Villa.png?alt=media&token=c3728c3c-99ee-497c-b6f1-693197ea32c1",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlesubmit = () => {
    console.log(imgs[currentSlide].name)
  }
  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    afterChange: index => setCurrentSlide(index)
  };
  return (
    <div className="main">
    <div className="slider-container-left">
      <Slider {...settings}>
        {imgs.map((url) => (
          <div className="cards">
            <div className="images">
              <img src={url.img} />
              <div className="name">
                <Typography
                  
                  variant="h6"
                  Wrap
                  component="a"
                  sx={{
                    mx: "auto",
                    fontFamily: "monospace",
                    fontWeight: 1500,
                    letterSpacing: ".5rem",
                    textDecoration: "none",
                    color: "#ffffff",
                    alignContent: "center",
                  }}
                >
                  {url.name}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Button onClick={handlesubmit}>Click me</Button>
    </div>
    </div>
  );
}
