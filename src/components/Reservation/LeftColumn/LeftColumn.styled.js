import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
	root: {
		boxShadow: '2px 0 2px 0 #c3c3c3',
		zIndex: 1,
	},
	item: {
		borderTop: '1px solid #c3c3c3',
		height: ({ rowHeight }) => rowHeight
	},
	header: {
		height: ({ headerHeight }) => headerHeight
	}

})

export default useStyles
