import React, { useState, useEffect } from 'react';
import TopNavigation from './components/TopNavigation.jsx';

const App = () => {
	return (
		<div>
			<div className="section">
				<TopNavigation />
				<div className="main-title-container">
					<h1 className="main-title">Lorem ipsum dolor sit amet.</h1>
				</div>
				<div className="photo-grid">
					<div className={'grid-photo'} />
					<div className={'grid-photo'} />
					<div className={'grid-photo'} />
					<div className={'grid-photo'} />
				</div>
			</div>
			<div className="section section-two">
				<div className="section-two-title-container">
					<h1 className="section-two-title">Lorem ipsum dolor sit amet.</h1>
				</div>
			</div>
			<div className="section">
				<div className="main-title-container">
					<h1 className="main-title">Lorem ipsum dolor sit amet.</h1>
				</div>
			</div>
		</div>
	);
};

export default App;
