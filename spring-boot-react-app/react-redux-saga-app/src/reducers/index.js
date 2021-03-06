import { combineReducers } from 'redux'
import employeesReducer from './employees-reducer'
import alertReducer from './alert-reducer'

export default combineReducers({
  employees: employeesReducer,
  alert: alertReducer
})

// If we are going to have several reducers, we must use combine them because there can only be one
