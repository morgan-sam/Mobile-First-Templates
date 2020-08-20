import React from 'react';
import Form from './Form.jsx';

const SignUpForm = () => {
	return (
		<div className="sign-up-form">
			<Form label={'Email address'} helperText={'Please enter your email address'} />
			<Form label={'Password'} helperText={'Please enter a password'} />
		</div>
	);
};

export default SignUpForm;
