import React from 'react';

const Button = ({ href = '/', children = null }) => {
	return (
		<button>
			<a href={href}>
				<span>{children}</span>
				<span className="clip"></span>
			</a>
		</button>
	);
};

export default Button;
