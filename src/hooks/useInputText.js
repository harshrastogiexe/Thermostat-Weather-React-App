import { useEffect, useState } from 'react';

const useInputText = (initialValue, setDebouncedValue) => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedValue(value);
			console.log(value);
		}, 800);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [setDebouncedValue, value]);

	const handelInputChange = (e) => {
		setValue(e.target.value);
	};

	return [value, handelInputChange];
};

export { useInputText };
