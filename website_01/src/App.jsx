import React, { useState, useEffect } from 'react';
import ColorThief from '../node_modules/colorthief/dist/color-thief.mjs';

const App = () => {
	const colorThief = new ColorThief();
	const [ img, setImg ] = useState(null);
	const [ dominantColor, setDominantColor ] = useState(null);

	useEffect(() => {
		const getImgColor = async () => {
			const res = await fetch('https://source.unsplash.com/random');
			const data = await res.blob();
			const pic = URL.createObjectURL(data);
			var image = new Image();
			image.src = pic;
			image.onload = async () => {
				const color = await colorThief.getColor(image);
				setDominantColor(color);
				setImg(pic);
			};
		};

		getImgColor();
	}, []);

	console.log(dominantColor);

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
