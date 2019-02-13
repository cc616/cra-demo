import constants from 'constants'

export const changeNumber = data => (dispatch) => {
  dispatch({
    type: constants.CHANGE_NUMBER,
    data,
  })
}

export default {}
