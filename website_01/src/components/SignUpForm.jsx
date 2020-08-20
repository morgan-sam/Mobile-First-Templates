import React from 'react';
import Form from 'components/Form.jsx';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const SignUpForm = () => {
	return (
		<div className="sign-up-form">
			<Form label={'Email address'} helperText={'Please enter your email address'} />
			<Form label={'Password'} helperText={'Please enter a password'} />
			<Box p={5} display={'flex'} justifyContent="center">
				<Button variant="contained" color="primary">
					Sign Up
				</Button>
			</Box>
		</div>
	);
};

export default SignUpForm;
