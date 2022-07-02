import React from 'react'
import { createStore, combineReducers } from 'redux'
import rootReducer from './reducer'

export default createStore(combineReducers({
  board: rootReducer
}));
