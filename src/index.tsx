import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			// light: '#eed1ff',
			main: '#bba0e5',
			dark: '#a38cd8',
			// contrastText: ,
		},
		secondary: {
			light: '#deecff',
			main: '#acbae5',
			dark: '#90ace5',
			// contrastText: ,
		},
		error: {
			// light: ,
			main: '#d836d3',
			// dark: ,
			// contrastText: ,
		},
	},

	//Use this like the demo below to change specific UI elements!
	overrides: {
		// MuiButton: { // Name of the component ⚛️ / style sheet
		//   root: { // Name of the rule
		// 	color: 'white', // Some CSS
		//   },
		// },
	},

});

//Do something vaguely like this to style a custom component
// const styles = createStyles({
// 	root: {
// 	  display: 'flex',
// 	  flexDirection: 'column',
// 	},
//   });  
// CustomCheckbox = withStyles(styles)(CustomCheckbox);
{/* <CustomCheckbox /> */}

ReactDOM.render(MyApp(), document.getElementById('root'));

function MyApp() {
	return (
		<React.Fragment>
			{/* <CssBaseline /> */}
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</React.Fragment>
	);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
