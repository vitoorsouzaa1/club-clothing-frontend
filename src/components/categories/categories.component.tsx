// Library
import { useEffect, useState } from 'react'
import axios from 'axios'

// Components
import { CategoryItem } from '../category-item/category-item.component'

// Utilities
import { ICategory } from '../../types/category.type'
import env from '../../config/env.config'

// Styles
import './categories.styles.css'

export const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiURL}/api/category`)

      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="categories-container">
      <div className="categories-content">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}
