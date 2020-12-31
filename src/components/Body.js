import React from 'react';
import Searchbar from './Searchbar';
import WeatherCard from './WeatherCard';

const Body = () => {
	return (
		<div className="body">
			<div className="search__wrapper">
				<Searchbar label="Enter City Name" placeholder="New Delhi" />
			</div>
			<div className="content__wrapper">
				<WeatherCard />
			</div>
		</div>
	);
};

export default Body;
