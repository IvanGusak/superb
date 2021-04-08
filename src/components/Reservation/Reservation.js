import React, { useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { Box, Container, Typography, Button, LinearProgress, Grid } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import LeftColumn from './LeftColumn'
import Timeframe from './Timeframe'

import { END_DATE, START_DATE } from '../../const'

import useStyles from './Reservation.styled'

const Reservation = () => {
    const [timeframe] = useState({ startDate: START_DATE, endDate: END_DATE })
    const { getDevices, openModal } = useStoreActions(actions => actions)
    const { isLoading, devices } = useStoreState(state => state)
    const classes = useStyles()
    const currDate = dayjs().format('MMM DD,YYYY')

    const handleClick = useCallback(() => {
        openModal(true)
    }, [openModal])

    useEffect(() => {
        getDevices(timeframe)
    }, [timeframe, getDevices])

    return (
        <Box className={classes.root}>
            <Container>
                <Typography color="primary">Reservations</Typography>
                <Box className={classes.table} bgcolor="grey.300" my={4} p={3}>
                    <Box className={classes.actions} pb={2}>
                        {isLoading && <LinearProgress className={classes.progress} />}
                        <Typography>
                            {currDate}
                        </Typography>
                        <Button
                            color="primary"
                            disabled={isLoading}
                            variant="contained"
                            onClick={handleClick}
                            startIcon={<AddIcon />}
                        >
                            Add reservation
                        </Button>
                    </Box>
                    <Grid className={classes.body} container>
                        <LeftColumn item xs={3} items={devices} />
                        <Timeframe item xs={9} items={devices} />
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}


export default Reservation
