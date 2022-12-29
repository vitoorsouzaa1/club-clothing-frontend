import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'

export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer, applyMiddleware(logger))
