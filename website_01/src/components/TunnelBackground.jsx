import React from 'react';

const TunnelBackground = () => {
	return (
		<div className="tunnel-parent">
			<div className="tunnel-container">
				{new Array(20).fill().map((el, i) => {
					const curStyle = {
						transform: `rotate(40deg) translateZ(${i * -20}px)`,
						opacity: `${1 - 0.05 * i}`,
						animationDelay: `${0.1 * i}s`
					};
					return <div key={i} style={curStyle} className="tunnel-box" />;
				})}
			</div>
			<div className="tunnel-container">
				{new Array(20).fill().map((el, i) => {
					const curStyle = {
						transform: `rotate(40deg) translateZ(${i * -20}px)`,
						opacity: `${1 - 0.05 * i}`,
						animationDelay: `${0.1 * i}s`
					};
					return <div key={i} style={curStyle} className="tunnel-box" />;
				})}
			</div>
		</div>
	);
};

export default TunnelBackground;
