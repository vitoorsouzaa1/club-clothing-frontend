import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'

// Utilities
import { db } from '../../../config/firebase.config'
import { ICategory } from '../../../types/category.type'
import { catergoryConverter } from '../../../converters/firestore.converters'

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async () => {
    const categoriesFromFirestore: ICategory[] = []

    const querySnapShot = await getDocs(
      collection(db, 'categories').withConverter(catergoryConverter)
    )

    querySnapShot.forEach((doc) => {
      categoriesFromFirestore.push(doc.data())
    })

    return categoriesFromFirestore
  }
)

interface IInitialState {
  categories: ICategory[]
  isLoading: boolean
}

const initialState: IInitialState = {
  categories: [],
  isLoading: false
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = false
    })

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
      state.isLoading = false
    })

    builder.addCase(fetchCategories.rejected, (state) => {
      state.isLoading = false
    })
  }
})

export default categorySlice.reducer
