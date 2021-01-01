import { useEffect, useState } from 'react';
import { getWeatherByLocation } from '../api/openWeather';

const useWeatherData = (location) => {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		const dispatchWeatherData = async () => {
			const response = await getWeatherByLocation(location);
			if (response.status >= 400) {
				console.error(response.message);
				return;
			}
			setWeatherData(response.data);
		};

		dispatchWeatherData();
	}, [location]);

	return weatherData;
};

export default useWeatherData;
