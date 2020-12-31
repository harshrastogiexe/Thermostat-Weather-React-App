import React from 'react';

const WeatherCard = () => {
	return (
		<div className="weatherCard">
			<header className="weatherCard__header">
				<h1> San, ML</h1>
				<h3>{`Thursday, 11:59 AM, Few Clouds`}</h3>
			</header>
			<section className="weatherCard__body">
				<h2>21&deg;C</h2>
				<div>
					<i className="wi wi-day-sunny icon"></i>
				</div>
				<div className="meta__data">
					<div>
						<i className="wi wi-strong-wind icon"></i>
						<span>12 km/h Winds</span>
					</div>
					<div>
						<i className="wi wi-humidity icon"></i>
						<span>24% Humidity</span>
					</div>
				</div>
			</section>
			<p className="para">Great day for a bit of laundry and maybe a nice picnic date later</p>
		</div>
	);
};

export default WeatherCard;
