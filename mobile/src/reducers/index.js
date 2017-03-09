import { combineReducers } from 'redux'
import news from './news'
import people from './people'

const rootReducers = combineReducers({news,people})

export default rootReducers
