import React from "react";
import "./CarImagesSection.css";
import car1 from "../../assets/images/byd-car2.webp";
import car2 from "../../assets/images/byd-car5.webp";
import car3 from "../../assets/images/byd-car6.webp";

const images = [
  { src: car1, alt: "BYD pickup side view" },
  { src: car2, alt: "BYD pickup front view" },
  { src: car3, alt: "BYD pickup angle view" },
];

export default function CarImagesSection() {
  return (
    <section className="car-images-section">
      <div className="car-images-section__inner">
        <div className="car-images-section__hero">
          <div className="car-images-section__hero-inner">
            <img className="hero-image" src={car1} alt={images[0].alt} />
            <div className="hero-overlay">
              <div className="hero-overlay__top">
                <p className="label">Featured Pickup</p>
                <h2>Pakistan’s Biggest pickup truck with PHEV technology</h2>
              </div>
              <div className="hero-overlay__bottom">
                <p className="hero-caption">Overall length 5,457 (mm), overall width 1,971 (mm), overall height 1,925 (mm) with a wheel base of 2,920 (mm)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="car-images-section__gallery">
          {images.map((item, index) => (
            <div key={index} className="car-image-card">
              <div className="car-image-card__frame">
                <img className="car-image" src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
