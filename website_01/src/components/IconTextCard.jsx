import React from 'react';
import combineMerge from '../img/combine-merge.svg';
import hexagonShape from '../img/hexagon-shape.svg';
import stack from '../img/stack.svg';
import box from '../img/box.svg';

const getImg = (imgName) => {
	switch (imgName) {
		case 'combine-merge':
			return combineMerge;
		case 'hexagon-shape':
			return hexagonShape;
		case 'stack':
			return stack;
		case 'box':
			return box;
		default:
			return null;
	}
};

export default function IconTextCard(props) {
	const { icon, title, text } = props;
	return (
		<div className="icon-text-card">
			<img className="icon-text-card-icon" src={getImg(icon)} />
			<span className="icon-text-card-title">{title}</span>
			<span className="icon-text-card-text">{text}</span>
		</div>
	);
}
