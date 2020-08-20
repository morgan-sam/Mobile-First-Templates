import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

const Form = () => {
	return (
		<FormControl>
			<InputLabel htmlFor="my-input">Email address</InputLabel>
			<Input id="my-input" aria-describedby="my-helper-text" />
			<FormHelperText id="my-helper-text">Please enter you email address.</FormHelperText>
		</FormControl>
	);
};

export default Form;
