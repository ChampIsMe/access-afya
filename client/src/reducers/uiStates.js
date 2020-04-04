import actionTypes from "../reduxActions/actions"

const uiStateReducer = (state = {sidebarManOpen:false}, action) => {
  switch (action.type) {
    case actionTypes.UI_STATE:
      return {...state, ...action.payload}
    case actionTypes.UI_STATE_RESET:
      return {sidebarManOpen:false}
    default:
      return state
  }
}
export default uiStateReducer
