// Library
import { useEffect, useState } from 'react'
import axios from 'axios'

// Utilities
import { ICategory } from '../../types/category.type'
import env from '../../config/env.config'

// Styles
import './categories.styles.css'

export const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiURL}/api/category`)

      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  console.log({ categories })

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="categories-container">
      <div className="categories-content"></div>
    </div>
  )
}
