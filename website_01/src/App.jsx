import React, { useState, useEffect } from 'react';
import TopNavigation from './components/TopNavigation.jsx';
import TunnelBackground from './components/TunnelBackground.jsx';

const App = () => {
	return (
		<div className="page">
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
			<div className="section">
				<div className="section-two-title-container">
					<h1>Lorem ipsum dolor sit amet.</h1>
					<h1>Rerum nam repellendus ratione omnis tempore rem.</h1>
				</div>
			</div>
			<div className="section section-three">
				<div className="main-title-container">
					<h1 className="main-title">Lorem ipsum dolor sit amet.</h1>
				</div>
				<TunnelBackground />
			</div>
		</div>
	);
};

export default App;
