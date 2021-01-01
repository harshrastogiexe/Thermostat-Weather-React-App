import { useEffect, useState } from 'react';

const handelError = (callback, delay) => {
	if (!(callback instanceof Function) || isNaN(delay) || delay < 0) return true;
};

const useInputText = (initialValue, setDebouncedCallback, delay = 700) => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		if (handelError(setDebouncedCallback, delay)) {
			throw new Error('Check Your Passed Values');
		}
	}, [setDebouncedCallback, delay]);

	const handelInputChange = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			const term = value.trim();
			if (term !== initialValue) {
				setDebouncedCallback(term);
			}
		}, delay);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [setDebouncedCallback, value, delay, initialValue]);

	return [value, handelInputChange];
};

export { useInputText };
