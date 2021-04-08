import React, { memo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Box, Grid, Typography } from '@material-ui/core'

import { DEVICE_SHAPE, ROW_HEIGHT, ROW_HEADER_HEIGHT } from '../../../const'

import useStyles from './LeftColumn.styled'


const LeftColumn = ({ className, items, component: Wrap, ...rest }) => {
	const classes = useStyles({ rowHeight: ROW_HEIGHT, headerHeight: ROW_HEADER_HEIGHT })

	return (
		<Wrap className={clsx(className, classes.root)} {...rest}>
			<Box className={classes.header} p={1} bgcolor="grey.200">
				<Typography variant="body2">Device/Time</Typography>
			</Box>
			{items.map(({ name, id, key }) => (
				<Box key={id} className={classes.item} p={1} bgcolor="white">
					<Typography color="primary">
						{name}
					</Typography>
					<Typography color="textSecondary" variant="caption">
						{key}
					</Typography>
				</Box>
			))}
		</Wrap>
	)
}

LeftColumn.propTypes = {
	className: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape(DEVICE_SHAPE)),
	component: PropTypes.elementType
}

LeftColumn.defaultProps = {
	className: '',
	items: [],
	component: Grid
}

export default memo(LeftColumn)