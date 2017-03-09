import {
  DISPLAY_NEWS,
  DISPLAY_SEARCH_NEWS
} from '../constants/actionType'

const initialState = []

const news = (state = initialState, action) => {

  switch(action.type){
    case DISPLAY_NEWS :
    return action.payload
    default :
    return state
  }
}

export default news
