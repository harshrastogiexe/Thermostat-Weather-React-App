import React, { useState } from 'react';
import useWeatherData from '../hooks/useWeatherData';
import Searchbar from './Searchbar';
// import useGeoLocation from '../hooks/useGeoLocation';
import Spinner from './Spinner';
import WeatherCard from './WeatherCard';

const Body = () => {
	const [location, setLocation] = useState('');

	const { weatherData, loaded } = useWeatherData(location);

	console.count('<BODY>');
	return (
		<div className="body">
			<div className="search__wrapper">
				{
					<Searchbar
						label="Enter City Name"
						placeholder="New Delhi"
						value={location}
						setValue={setLocation}
					/>
				}
			</div>
			<div className="content__wrapper">
				{!loaded ? <Spinner message="Loading" /> : <WeatherCard data={weatherData} />}
			</div>
		</div>
	);
};

export default Body;
