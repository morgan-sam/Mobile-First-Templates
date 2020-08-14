import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	}
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Box display="flex" flexGrow={1}>
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
					</Box>
					<ShoppingBasket
						edge="end"
						className={classes.menuButton}
						color="inherit"
						aria-label="ShoppingBasket"
					>
						<MenuIcon />
					</ShoppingBasket>
				</Toolbar>
			</AppBar>
		</div>
	);
}
