import React, { useState, useEffect } from 'react';
import * as icons from './icons.json';
import * as reccomendations from './recommendation.json';

const WeatherCard = ({ data }) => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 6 * 10 * 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);
	if (!data) {
		return <h1>Something Went Wrong</h1>;
	}

	const convertDay = (date) => {
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

		return `${days[date.getDay()]}, ${date.getHours()}:${date.getMinutes()}`;
	};

	const prefix = 'wi wi-';
	const icon = prefix + icons.default[+data.weather[0].id].icon;
	const reccomendation = reccomendations.default[data.weather[0].id].recommendation;

	return (
		<div className="weatherCard">
			<header className="weatherCard__header">
				<h1>
					<span>{`${data.name}, ${data.sys.country}`}</span>
				</h1>
				<h3>{`${convertDay(time)}, ${data.weather[0].main}`}</h3>
			</header>
			<section className="weatherCard__body">
				<h2>
					{((temp) => {
						return (temp - 273.15).toFixed(1);
					})(data.main.temp)}
					&deg;C
				</h2>
				<div>
					<i className={`${icon} icon`}></i>
				</div>
				<div className="meta__data">
					<div>
						<i className="wi wi-strong-wind icon"></i>
						<span>{data.wind.speed} km/h Winds</span>
					</div>
					<div>
						<i className="wi wi-humidity icon"></i>
						<span>{data.main.humidity}% Humidity</span>
					</div>
				</div>
			</section>
			<p className="para">{reccomendation}</p>
		</div>
	);
};

export default WeatherCard;
