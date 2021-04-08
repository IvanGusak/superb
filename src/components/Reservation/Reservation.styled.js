import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(({ spacing }) => ({
	root: {
		display: 'flex',
		minHeight: '100vh',
		alignItems: 'center',
		justifyContent: 'center'
	},
	progress: {
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		height: spacing(1),
	},
	table: {
		position: 'relative',
		border: '1px solid #c7c7c7',
		borderRadius: 4,
		overflow: 'hidden'
	},
	body: {
		border: '1px solid #c3c3c3'
	},
	actions: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	devices: {
		width: spacing(25),

	}
}))

export default useStyles