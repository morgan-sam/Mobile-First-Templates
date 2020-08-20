import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

const Form = (props) => {
	const { label, helperText } = props;
	return (
		<FormControl>
			<InputLabel htmlFor="my-input">{label}</InputLabel>
			<Input id="my-input" aria-describedby="my-helper-text" />
			<FormHelperText id="my-helper-text">{helperText ? helperText : ' '}</FormHelperText>
		</FormControl>
	);
};

export default Form;
