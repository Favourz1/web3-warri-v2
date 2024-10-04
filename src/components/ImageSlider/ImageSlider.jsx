import jpgOne from "../../assets/img/imageSlider/1.jpg";
import jpgTwo from "../../assets/img/imageSlider/2.jpg";
import jpgThree from "../../assets/img/imageSlider/3.jpg";
import jpgFour from "../../assets/img/imageSlider/4.jpg";
import jpgFive from "../../assets/img/imageSlider/5.jpg";
import jpgSix from "../../assets/img/imageSlider/6.jpg";
import jpgSeven from "../../assets/img/imageSlider/7.jpg";
import jpgEight from "../../assets/img/imageSlider/8.jpg";
import jpgNine from "../../assets/img/imageSlider/9.jpg";
import jpgTen from "../../assets/img/imageSlider/10.jpg";
import jpgEleven from "../../assets/img/imageSlider/11.jpg";
import jpgTwelve from "../../assets/img/imageSlider/12.jpg";

import "./imageSlider.scss";

const ImageSlider = () => {
  return (
    <div className="image-slider-gallery">
      <img src={jpgOne} alt="Image 1" loading="lazy" />
      <img src={jpgTwo} alt="Image 2" loading="lazy" />
      <img src={jpgThree} alt="Image 3" loading="lazy" />
      <img src={jpgFour} alt="Image 4" loading="lazy" />
      <img src={jpgFive} alt="Image 5" loading="lazy" />
      <img src={jpgSix} alt="Image 6" loading="lazy" />
      <img src={jpgSeven} alt="Image 7" loading="lazy" />
      <img src={jpgEight} alt="Image 8" loading="lazy" />
      <img src={jpgNine} alt="Image 9" loading="lazy" />
      <img src={jpgTen} alt="Image 10" loading="lazy" />
      <img src={jpgEleven} alt="Image 11" loading="lazy" />
      <img src={jpgTwelve} alt="Image 12" loading="lazy" />

      {/* <img src="https://picsum.photos/id/199/400/300" alt="the beach" />
      <img
        src="https://picsum.photos/id/1011/400/300"
        alt="a girl doing kayak"
      />
      <img
        src="https://picsum.photos/id/124/400/300"
        alt="a small boat in the sea"
      />
      <img src="https://picsum.photos/id/235/400/300" alt="a mountain" />
      <img src="https://picsum.photos/id/423/400/300" alt="a forest" /> */}
    </div>
  );
};

export default ImageSlider;
