import React, { useCallback, useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import dayjs from 'dayjs'

import { Modal, Fade, Box, Paper, Backdrop, Button, Select, MenuItem, FormControl, Snackbar, InputLabel } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { TimePicker } from '@material-ui/pickers'

import { validateRange } from '../../utils'

import useStyles from './NewReserve.styled'

const NewReserve = () => {
	const classes = useStyles();
	const [showError, setError] = useState(false)
	const { isModalOpen, newRange, devices, isLoading } = useStoreState(state => state)
	const { openModal, setNewRange, updateDevice } = useStoreActions(actions => actions)

	const handleClose = useCallback(() => {
		openModal(false)
	}, [openModal])

	const handleChangeDate = key => date => {
		setNewRange({ key, value: date.utc().second(0).format() })
	}

	const handleChange = useCallback(({ target }) => {
		setNewRange({ key: 'id', value: target.value })
	}, [setNewRange])

	const handleSubmit = useCallback(() => {
		const { reserve } = devices.find(({ id }) => id === newRange.id)
		const [start, end] = [newRange.start, newRange.end].sort()
		const hasError = validateRange(reserve, { start, end })

		if (hasError) {
			setError(true)
		} else {
			updateDevice({ id: newRange.id, reserve: [{ start, end }] })
				.then(() => {
					openModal(false)
				})
		}
	}, [devices, newRange, updateDevice, openModal])

	const clearError = () => {
		setError(false)
	}

	return (
		<Modal
			className={classes.modal}
			open={isModalOpen}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={isModalOpen}>
				<Paper  className={classes.paper}>
					<Box width="100%" my={2}>
						<FormControl fullWidth className={classes.formControl}>
							<InputLabel id="device">Please choose device</InputLabel>
							<Select labelId="device" value={newRange.id} onChange={handleChange}>
								{devices.map(({ id, name }) => (
									<MenuItem key={id} value={id}>{name}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>
					<Box width="100%" display="flex" justifyContent="space-between" mb={4}>
						<TimePicker
							minutesStep={30}
							ampm={false}
							value={dayjs.utc(newRange.start)}
							onChange={handleChangeDate('start')}
						/>
						<TimePicker
							minutesStep={30}
							ampm={false}
							value={dayjs.utc(newRange.end)}
							onChange={handleChangeDate('end')}
						/>
					</Box>
					<Button variant="contained" disabled={isLoading} color="primary" onClick={handleSubmit}>Submit</Button>
					<Snackbar open={showError} autoHideDuration={6000} onClose={clearError}>
						<MuiAlert elevation={6} variant="filled" severity="error" onClose={clearError} >
							Please change date range!
						</MuiAlert>
					</Snackbar>
				</Paper>
			</Fade>
		</Modal>
	)
}


export default NewReserve
