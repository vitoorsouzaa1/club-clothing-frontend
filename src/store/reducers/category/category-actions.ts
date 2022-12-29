import { collection, getDocs } from 'firebase/firestore'
import { Dispatch } from 'redux'

// Utilities
import { db } from '../../../config/firebase.config'
import { catergoryConverter } from '../../../converters/firestore.converters'
import { ICategory } from '../../../types/category.type'
import { CategoryActionTypes } from './category.action-types'

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CategoryActionTypes.FETCH_CATEGORIES_START })

    try {
      const categoriesFromFirestore: ICategory[] = []

      const querySnapShot = await getDocs(
        collection(db, 'categories').withConverter(catergoryConverter)
      )

      querySnapShot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: categoriesFromFirestore
      })
    } catch (error) {
      dispatch({ type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE })
    }
  }
}
