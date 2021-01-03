import axios from 'axios';

const openWeather = axios.create({
	method: 'get',
	baseURL: 'https://api.openweathermap.org/data/2.5',
	params: {
		appid: `${process.env.REACT_APP_OPENWEATHER_KEY}`,
	},
});

const getWeatherByLocation = async (location) => {
	const response = await openWeather.get('/weather', {
		params: {
			q: `${location}`,
		},
	});

	return response;
};

const getWeatherByCoordinate = async (longitude = 139, latitude = 35) => {
	return await openWeather.get('/weather', {
		params: {
			lat: latitude,
			lon: longitude,
		},
	});
};

export { getWeatherByLocation, getWeatherByCoordinate };
