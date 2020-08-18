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
				<div className="title-container">
					<h1>Lorem ipsum dolor sit amet.</h1>
					<h1>Rerum nam repellendus ratione omnis tempore rem.</h1>
				</div>
			</div>
			<div className="section">
				<div className="main-title-container">
					<h1 className="main-title">Lorem ipsum dolor sit amet.</h1>
				</div>
				<TunnelBackground />
			</div>
			<div className="section">
				<div className="main-title-container">
					<h1 className="main-title">Voluptatum consequatur ratione.</h1>
				</div>
				<div className="text-container">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corrupti excepturi explicabo et
						modi dolore odio.
					</p>
					<p>
						Consequatur laudantium consequuntur omnis, voluptates perspiciatis similique animi
						necessitatibus, nisi autem sequi nemo.
					</p>

					<p>
						Qui adipisci tempora quisquam dignissimos mollitia. Recusandae, odit illum. Aliquam, quibusdam.
					</p>
				</div>
			</div>
		</div>
	);
};

export default App;
