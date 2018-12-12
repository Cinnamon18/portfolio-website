import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Header from './Components/Header';
import MainBody from './Components/MainBody';
import styles from './App.module.scss';
// import resumeLink from "./assets/KalokAResume.pdf";

class App extends Component {

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
							// resumeLink={resumeLink}
						/>
					</Grid>
					<Grid item xs={12}>
						<MainBody />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default App;
