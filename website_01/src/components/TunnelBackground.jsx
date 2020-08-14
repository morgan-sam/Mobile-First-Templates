import React, { useState, useEffect } from 'react';

const TunnelBackground = () => {
	return (
		<div className="tunnel-container">
			{new Array(10).fill().map((el, i) => {
				const curStyle = {
					transform: `rotate(40deg) translateY(${i * 25}px) translateZ(${i * -10}px)`,
					opacity: `${1 - 0.1 * i}`,
					animationDelay: `${0.1 * i}s`
				};
				return <div key={i} style={curStyle} className="tunnel-box" />;
			})}
		</div>
	);
};

export default TunnelBackground;
