import React, { useState } from 'react';
import Searchbar from './Searchbar';
import WeatherCard from './WeatherCard';
import useWeatherData from '../hooks/useWeatherData';

const Body = () => {
	const [location, setLocation] = useState('Noida');
	const weatherData = useWeatherData(location);

	return (
		<div className="body">
			<div className="search__wrapper">
				<Searchbar
					label="Enter City Name"
					placeholder="New Delhi"
					value={location}
					setValue={setLocation}
				/>
			</div>
			<div className="content__wrapper">
				<WeatherCard data={weatherData} />
			</div>
		</div>
	);
};

export default Body;
