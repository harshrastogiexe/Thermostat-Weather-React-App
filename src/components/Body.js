import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import WeatherCard from './WeatherCard';
import useWeatherData from '../hooks/useWeatherData';
import Spinner from './Spinner';

const Body = () => {
	const [location, setLocation] = useState('Noida');
	const weatherData = useWeatherData(location);
	const [loaded, setLoaded] = useState(false);
	console.log(loaded);

	useEffect(() => {
		if (!location) return;
		setLoaded(false);
	}, [location]);

	useEffect(() => {
		if (!!weatherData) {
			setLoaded(true);
		}
	}, [weatherData]);

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
