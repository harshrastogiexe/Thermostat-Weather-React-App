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

export { getWeatherByLocation };
