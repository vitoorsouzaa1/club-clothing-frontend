// Libs
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'

// Components
import { CategoryItem } from '../category-item/category-item.component'

// Utilities
import { ICategory } from '../../types/category.type'

// Configs
import { db } from '../../config/firebase.config'

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import { catergoryConverter } from '../../converters/firestore.converters'

export const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
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
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}
