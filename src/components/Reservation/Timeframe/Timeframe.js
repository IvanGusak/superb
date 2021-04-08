import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'

import { Box, Grid } from '@material-ui/core'
import Frame from './Frame'

import { DEVICE_SHAPE, ROW_HEIGHT, ROW_HEADER_HEIGHT } from '../../../const'

import useStyles from './Timeframe.styled'
import clsx from 'clsx'


const Timeframe = ({ className, items, component: Wrap, ...rest }) => {
	const classes = useStyles({ rowHeight: ROW_HEIGHT, headerHeight: ROW_HEADER_HEIGHT, rows: items.length })

	const dayTimeFrame = useMemo(() => {
		return [...new Array(24)].map((val, i) => ({ key: i, label: `${i+1}:00` }))
	}, [])

	return (
		<Wrap className={clsx(className, classes.root)} {...rest}>
			<Box className={classes.header}>
				{dayTimeFrame.map(({ key, label }) => (
					<div className={classes.label} key={`${key}_${label}`}>
						<span>{label}</span>
					</div>
				))}
			</Box>
			<Box className={classes.grid}>
				{items.map(({ reserve = [], id }, index) => (
					<React.Fragment key={index}>
						{dayTimeFrame.map(({ key }, dayIndex) => (
							<div
								className={classes.box}
								style={{ gridRow: index + 1, gridColumn: `${(dayIndex || 1) * 2}/${(dayIndex + 1) * 2}` }}
								key={`grid_${id}_${key}`}
							/>
						))}
						{reserve.map((frame, frameIndex) => (
							<Frame key={`frame_${id}_${frameIndex}`} row={index + 1} frame={frame} />
						))}
					</React.Fragment>
				))}
			</Box>
		</Wrap>
	)
}

Timeframe.propTypes = {
	className: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape(DEVICE_SHAPE)),
	component: PropTypes.elementType
}

Timeframe.defaultProps = {
	className: '',
	items: [],
	component: Grid
}

export default memo(Timeframe)
