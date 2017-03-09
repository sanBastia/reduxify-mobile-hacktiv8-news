import {
  DISPLAY_PROFILE
} from '../constants/actionType'

const initialState = {}

const people = (state = initialState, action) => {
  switch(action.type){
    case DISPLAY_PROFILE :
    return action.payload

    default :
    return state
  }
}

export default people
