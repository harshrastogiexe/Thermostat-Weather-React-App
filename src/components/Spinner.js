import React from 'react';

function Spinner({message}) {
	return (
		<div class="loader">
			<div class="inner one"></div>
			<div class="inner two"></div>
			<div class="inner three"></div>

			<div class="message">{message}</div>
		</div>
	);
}

export default Spinner;
