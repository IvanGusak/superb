import PropTypes from 'prop-types'

export const START_DATE = '2021-04-08T00:00:00Z'
export const END_DATE = '2021-04-08T23:59:59Z'
export const ROW_HEIGHT = 80
export const ROW_HEADER_HEIGHT = 35


export const TIMEFRAME_SHAPE = {
	"start": PropTypes.string,
	"end": PropTypes.string,
}

export const DEVICE_SHAPE = {
	"id": PropTypes.number,
	"type": PropTypes.oneOf(['mobile', 'desktop']),
	"name": PropTypes.string,
	"key": PropTypes.string,
	"reserve": PropTypes.arrayOf(PropTypes.shape(TIMEFRAME_SHAPE))
}
