import React, { useState, useEffect } from 'react';
import ColorThief from '../node_modules/colorthief/dist/color-thief.mjs';

const App = () => {
	const [ img, setImg ] = useState(null);

	useEffect(() => {
		const getImgColor = async () => {
			// const colorThief = new ColorThief();
			// const color = await colorThief.getColor(img);
			// console.log(color);

			const res = await fetch('https://source.unsplash.com/random');
			const data = await res.blob();
			const outside = URL.createObjectURL(data);
			setImg(outside);
		};

		getImgColor();
	}, []);
	return (
		<div className="app">
			<div className="main-title-container">
				<h1 className="main-title">Lorem ipsum dolor sit amet.</h1>
			</div>
			<img className="background" src={img} />
		</div>
	);
};

export default App;
