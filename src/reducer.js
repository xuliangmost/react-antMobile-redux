import {combineReducers} from 'redux'
import * as homePage from './component/homePage/reducer'

export default combineReducers(Object.assign(
  homePage
))