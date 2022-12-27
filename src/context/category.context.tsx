import { collection, getDocs } from 'firebase/firestore'
import { createContext, FunctionComponent, useState } from 'react'

// Utilities
import { db } from '../config/firebase.config'
import { catergoryConverter } from '../converters/firestore.converters'
import { ICategory } from '../types/category.type'

interface ICategoryContext {
  categories: ICategory[]
  fetchCategories: () => Promise<void>
  isLoading: boolean
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
  isLoading: false
})

interface IProps {
  children: React.ReactNode
}

export const CategoryContextProvider: FunctionComponent<IProps> = ({
  children
}) => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      const categoriesFromFirestore: ICategory[] = []

      const querySnapShot = await getDocs(
        collection(db, 'categories').withConverter(catergoryConverter)
      )

      querySnapShot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, isLoading, fetchCategories }}>
      {children}
    </CategoryContext.Provider>
  )
}
