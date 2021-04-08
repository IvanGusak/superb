import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { Box } from '@material-ui/core'

import { TIMEFRAME_SHAPE } from '../../../../const'

import useStyles from './Frame.styled'

dayjs.extend(utc)


const Frame = ({ className, frame, row }) => {
	const column = useMemo(() => {
		const start = (dayjs.utc(frame.start).get('hour') + dayjs.utc(frame.start).get('minute') / 60) * 2
		const end = (dayjs.utc(frame.end).get('hour') + dayjs.utc(frame.end).get('minute') / 60) * 2

		return { start, end }
	}, [frame])
	const classes = useStyles({ row, column })

	return (
		<Box className={clsx(className, classes.root)} bgcolor="primary.light" />
	)
}

Frame.propTypes = {
	className: PropTypes.string,
	frame: PropTypes.shape(TIMEFRAME_SHAPE).isRequired,
	row: PropTypes.number,
}

Frame.defaultProps = {
	className: '',
	row: 1,
}

export default memo(Frame)
