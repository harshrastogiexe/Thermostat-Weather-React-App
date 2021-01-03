import React from 'react';

function Spinner({ message }) {
	return (
		<div className="loader">
			<div className="inner one"></div>
			<div className="inner two"></div>
			<div className="inner three"></div>

			<div className="message">{message}</div>
		</div>
	);
}

export default Spinner;
