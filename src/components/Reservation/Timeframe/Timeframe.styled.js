import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(({ spacing, palette }) => ({
	root: {
		padding: spacing(0, 3, 0, 0),
		background: palette.grey['300'],
		overflowX: 'scroll',

	},
	header: {
		display: 'grid',
		height: ({ headerHeight }) => headerHeight,
		gridTemplateColumns: 'repeat(48, 40px)',
		gridGap: 1,
	},
	label: {
		position: 'relative',
		display: 'flex',
		height: '100%',
		width: '100%',
		gridColumn: 'span 2',
		justifySelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		fontSize: spacing(1.5),
		'&:before': {
			content: '"|"',
			position: 'absolute',
			bottom: -8,
			left: '50%',
			transform: 'translateX(-50%)',
		}
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(48, 40px)',
		gridGap: 1,
		gridTemplateRows: ({ rows, rowHeight }) => `repeat(${rows}, ${rowHeight}px)`,

	},
	box: {
		background: palette.grey["50"],
	}
}))

export default useStyles
