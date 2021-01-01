import { useState, useEffect } from 'react';

const useGeoLocation = () => {
	const [position, setPosition] = useState(null);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(cords) => {
				setPosition(cords);
			},
			(error) => console.error(error)
		);
	}, []);
	return position;
};

export default useGeoLocation;
