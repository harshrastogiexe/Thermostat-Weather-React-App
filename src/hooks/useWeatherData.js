import { useEffect, useState } from 'react';
import { getWeatherByCoordinate, getWeatherByLocation } from '../api/openWeather';

const useWeatherData = (location) => {
	const [weatherData, setWeatherData] = useState(null);
	const [position, setPosition] = useState(null);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(cords) => {
				setPosition(cords);
			},
			(error) => console.error(error)
		);
	}, []);

	useEffect(() => {
		const getWeatherData = async (location) => {
			const { latitude, longitude } = location.coords;
			const { data } = await getWeatherByCoordinate(longitude, latitude);
			setWeatherData(data);
		};
		if (position) getWeatherData(position);
	}, [position]);

	useEffect(() => {
		const getWeatherData = async (locationString) => {
			const { data } = await getWeatherByLocation(locationString);
			setWeatherData(data);
		};

		if (location) {
			getWeatherData(location);
			setLoaded(false);
		}
	}, [location]);

	useEffect(() => {
		if (weatherData) {
			setLoaded(true);
		}
	}, [weatherData]);

	return { weatherData, loaded };
};

export default useWeatherData;


