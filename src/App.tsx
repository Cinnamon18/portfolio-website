import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Header from './Components/Header';
import MainBody from './Components/MainBody';
import styles from './App.module.scss';

class App extends Component {

	//TODO
	private static readonly RESUME_LINK = "/res/KalokAResume.pdf";

	render(): JSX.Element {
		return (
			<div className={styles.App}>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="flex-start"
					spacing={8}>
					{/* .TODO: do this differently on mobile. . make it reponsive */}
					<Grid item xs={12}>
						<Header
							resumeLink={App.RESUME_LINK}
						/>
					</Grid>
					<Grid item xs={12}>
						<MainBody />
					</Grid>
				</Grid>

				{/* <Button variant="contained" color="primary">
						Hello World
    				</Button> */}
			</div>
		);
	}
}

export default App;
