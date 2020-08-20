import React, { useState, useEffect } from 'react';
import TopNavigation from 'components/TopNavigation.jsx';
import TunnelBackground from 'components/TunnelBackground.jsx';
import IconTextCard from 'components/IconTextCard.jsx';
import SignUpForm from 'components/SignUpForm.jsx';

const iconTextCardText =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis quam recusandae tenetur modi soluta quod, quae fuga et cum!';

const App = () => {
	return (
		<div className="page">
			<div className="section">
				<TopNavigation />
				<h1 className="title">Lorem ipsum dolor sit amet.</h1>
				<div className="photo-grid">
					<div className={'grid-photo'} />
					<div className={'grid-photo'} />
					<div className={'grid-photo'} />
					<div className={'grid-photo'} />
				</div>
			</div>
			<div className="section">
				<h1>Lorem ipsum dolor sit amet.</h1>
				<h1>Rerum nam repellendus ratione omnis tempore rem.</h1>
			</div>
			<div className="section">
				<h1 className="title">Lorem ipsum dolor sit amet.</h1>
				<TunnelBackground />
			</div>
			<div className="section">
				<h1 className="title">Voluptatum consequatur ratione.</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corrupti excepturi explicabo et modi
					dolore odio.
				</p>
				<p>
					Consequatur laudantium consequuntur omnis, voluptates perspiciatis similique animi necessitatibus,
					nisi autem sequi nemo.
				</p>

				<p>Qui adipisci tempora quisquam dignissimos mollitia. Recusandae, odit illum. Aliquam, quibusdam.</p>
			</div>
			<div className="section">
				<h1 className="title">Magni, corrupti excepturi explicabo.</h1>
				<div className="icon-container">
					<IconTextCard icon={'combine-merge'} title={'Excepturi'} text={iconTextCardText} />
					<IconTextCard icon={'hexagon-shape'} title={'Excepturi'} text={iconTextCardText} />
					<IconTextCard icon={'stack'} title={'Excepturi'} text={iconTextCardText} />
					<IconTextCard icon={'box'} title={'Excepturi'} text={iconTextCardText} />
				</div>
			</div>
			<div className="section">
				<h2 className="title">Sign Up Today</h2>
				<SignUpForm />
			</div>
		</div>
	);
};

export default App;
