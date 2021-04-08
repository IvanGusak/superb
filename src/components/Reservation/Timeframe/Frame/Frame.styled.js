import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
	root: {
		gridRow: ({ row }) => row,
		gridColumn: ({ column }) => `${column.start}/${column.end}`,
		borderRadius: 2,
		zIndex: 1,
	},
})

export default useStyles
