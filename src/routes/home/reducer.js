import * as actionTypes from './actions'

const initialState = {
  number: 0,
}

export default (state = initialState, action = { type: '', data: '' }) => {
  const { type, data } = action

  switch (type) {
    case actionTypes.CHANGE_NUMBER_RESULT.SUCCESS:
      return {
        ...state,
        number: data,
      }
    default:
      return state
  }
}
