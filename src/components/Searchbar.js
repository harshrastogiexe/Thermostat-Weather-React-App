import React from 'react';
import { useInputText } from '../hooks/useInputText';
import { Search } from 'react-feather';

const Searchbar = ({
	label = '',
	placeholder = '',
	className = '',
	id = '',
	value = '',
	setValue,
}) => {
	const [textValue, handelInputChange] = useInputText(value, setValue);
	return (
		<div className="input-text">
			<label className="input-text__label">{label}</label>
			<div className="input-text__field">
				<div className="icon">
					<Search size={20} color="#212121" />
				</div>
				<input
					type="text"
					placeholder={placeholder}
					value={textValue}
					className={className}
					onChange={handelInputChange}
					id={id}
				/>
			</div>
		</div>
	);
};

export default Searchbar;
