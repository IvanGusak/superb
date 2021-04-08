import { makeStyles } from '@material-ui/core'

const GRID_SIZE = 40

const useStyles = makeStyles(({ spacing, palette }) => ({
	root: {
		position: 'relative',
		padding: spacing(0, 3, 0, 0),
		background: palette.grey['300'],
		overflowX: 'scroll',
	},
	header: {
		display: 'grid',
		height: ({ headerHeight }) => headerHeight,
		gridGap: 1,
		gridTemplateColumns: `repeat(48, ${GRID_SIZE}px)`,
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
		borderBottom: '1px solid #c7c7c7',
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
		overflow: 'visible',
		gridTemplateColumns: `repeat(48, ${GRID_SIZE}px)`,
		gridGap: 1,
		gridTemplateRows: ({ rows, rowHeight }) => `repeat(${rows}, ${rowHeight}px)`,
	},
	bg: {
		position: "absolute",
		top: ({ headerHeight }) => headerHeight,
		bottom: 0,
		left: 0,
		width: GRID_SIZE*49,
		background: `repeating-linear-gradient(to right,transparent 0 ${GRID_SIZE*2 + 1}px,#c7c7c7 ${GRID_SIZE*2 + 1}px ${GRID_SIZE*2 + 2}px),
repeating-linear-gradient(to bottom, transparent 0 ${GRID_SIZE*2 -1}px,#c7c7c7 ${GRID_SIZE*2 + 1}px ${GRID_SIZE*2}px)
#fff`,
	},
	box: {
		background: palette.grey["50"],
	}
}))

export default useStyles
