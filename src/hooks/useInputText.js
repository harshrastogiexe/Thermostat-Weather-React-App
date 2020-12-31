import { useState } from 'react';

const useInputText = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const handelInputChange = (e) => {
		setValue(e.target.value);
	};

	return [value, handelInputChange];
};

export { useInputText };
