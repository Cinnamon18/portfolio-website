import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import { Grid } from '@material-ui/core';
import classes from '*.module.css';

class App extends Component {
	render(): JSX.Element {
		return (
			<div className="App">
				<header className="App-header">
				</header>
				<body>
					<Grid
						container
						direction="row"
						justify="space-between"
						alignItems="flex-start"
						className={classes.root}
						spacing={16}>

						{/*TODO: do this differently on mobile. . make it reponsive */}
						<Grid item xs={3}>
							<Sidebar />
						</Grid>
						<Grid item xs={9}>
							<MainBody />
						</Grid>
					</Grid>

					{/* <Button variant="contained" color="primary">
						Hello World
    				</Button> */}
				</body>
			</div>
		);
	}
}

export default App;
