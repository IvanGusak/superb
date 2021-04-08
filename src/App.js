import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DayjsUtils from '@date-io/dayjs'

import CssBaseline from '@material-ui/core/CssBaseline'
import Reservation from './components/Reservation'
import NewReserve from './components/NewReserve'

const theme = createMuiTheme({
	typography: {
		htmlFontSize: 15,
		body1: {
			fontWeight: 500
		}
	}
});

function App() {
	return (
		<MuiPickersUtilsProvider utils={DayjsUtils}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NewReserve />
				<Reservation />
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
}

export default App;
