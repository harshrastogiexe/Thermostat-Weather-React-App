import React, { useState } from 'react';
import Searchbar from './Searchbar';
import WeatherCard from './WeatherCard';
import weatherData from './response';
// 68139f12750255bb1a7620040e4cf5fd

const Body = () => {
	const [location, setLocation] = useState('Delhi');
	const [data, setData] = useState(weatherData);

	return (
		<div className="body">
			<div className="search__wrapper">
				<Searchbar label="Enter City Name" placeholder="New Delhi" setValue={setLocation} />
			</div>
			<div className="content__wrapper">
				<WeatherCard data={data} />
			</div>
		</div>
	);
};

export default Body;
