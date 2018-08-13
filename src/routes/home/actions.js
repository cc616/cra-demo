import { action, createRequestTypes } from 'utils/action'

export const CHANGE_NUMBER = 'CHANGE_NUMBER'

export const CHANGE_NUMBER_RESULT = createRequestTypes('CHANGE_NUMBER_RESULT')

export const changeNumber = data => action(CHANGE_NUMBER, { data })
