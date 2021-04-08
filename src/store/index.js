import { createStore, persist, thunk, actionOn, action } from 'easy-peasy'

import fakeDevicesResponse from './fakeDevices.json'
import { delay } from '../utils'
import { START_DATE, END_DATE } from '../const'
import dayjs from "dayjs";

const store = createStore(persist({
    isLoading: false,
    devices: [],
    newRange: {
        id: null,
        start: START_DATE,
        end: END_DATE
    },
    user: {},

    isModalOpen: false,

    getDevices: thunk((actions, { startDate = START_DATE, endDate = END_DATE }) => {
        return delay(fakeDevicesResponse, 5000)
    }),
    updateDevice: thunk((actions, { id, reserve }) => {
        return delay({ id, reserve }, 5000)
    }),
    onGetDevices: actionOn(
        actions => [actions.getDevices.startType, actions.getDevices.successType],
        (state, target) => {
            const { resolvedTargets } = target
            const [start] = resolvedTargets

            state.isLoading = target.type === start

            if (target.result) {
                state.devices = target.result
            }
        },
    ),
    onUpdateDevice: actionOn(
        actions => [actions.updateDevice.startType, actions.updateDevice.successType],
        (state, target) => {
            const { resolvedTargets, payload } = target
            const [start, success] = resolvedTargets

            state.isLoading = target.type === start

            if (target.type === success) {
                state.devices = state.devices.map(device => {
                    if(device.id === payload.id) {
                        return { ...device, reserve: [...device.reserve, ...payload.reserve] }
                    }
                    return device
                })
            }
        },
    ),
    openModal: action((state, payload = false) => {
        state.isModalOpen = payload

        if (payload) {
            state.newRange = {
                start: START_DATE,
                end: dayjs(END_DATE).minute(0).format()
            }
            state.newRange.id = state.devices[0].id
        }
    }),
    setNewRange: action((state, { key, value }) => {
        state.newRange[key] = value
    }),

},{
    storage: 'localStorage',
}), { name: 'Superb', version: 1 });


export default store
