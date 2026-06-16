import React from "react";
import "./hero-2.css";
import carImg from "../../assets/images/byd-car1.webp";
import ancapImg from "../../assets/images/ANCAP.webp";
import awardImg from "../../assets/images/2024.webp";

export default function Hero2() {
	return (
		<section className="hero2">
			<div className="hero2__content">
				<div className="hero2__stats">
					<div className="stat">
						<div className="stat__value">UP TO<br/><span>800km</span></div>
						<div className="stat__label">Combined Range</div>
					</div>

					<div className="divider"/>

					<div className="stat">
						<div className="stat__value">AS FAST AS<br/><span>5.7 sec</span></div>
						<div className="stat__label">0 - 100 km/h</div>
					</div>

					<div className="divider"/>

					<div className="stat">
						<div className="stat__value">POWER<br/><span>436 HP &amp; 650 NM</span></div>
						<div className="stat__label">Torque</div>
					</div>
				</div>

				<div className="hero2__visual">
					<img className="hero2__car" src={carImg} alt="BYD pickup" />
				</div>

				<div className="hero2__corner-logos">
					<img className="award" src={awardImg} alt="2024 award" />
					<img className="ancap" src={ancapImg} alt="ANCAP safety" />
				</div>
			</div>
		</section>
	);
}
