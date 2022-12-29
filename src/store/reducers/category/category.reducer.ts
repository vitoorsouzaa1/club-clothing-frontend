import { ICategory } from '../../../types/category.type'
import { CategoryActionTypes } from './category.action-types'

interface IInitialState {
  categories: ICategory[]
  isLoading: boolean
}

const initialState: IInitialState = {
  categories: [],
  isLoading: false
}

export const categoryReducer = (
  state = initialState,
  action: any
): IInitialState => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true
      }
    case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload
      }
    case CategoryActionTypes.FETCH_CATEGORIES_FAILURE:
      return { ...state, isLoading: false }

    default:
      return state
  }
}
