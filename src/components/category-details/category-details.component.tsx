import { collection, getDocs, query, where } from 'firebase/firestore'
import { FunctionComponent, useEffect, useState } from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

// Utilities
import { db } from '../../config/firebase.config'
import { catergoryConverter } from '../../converters/firestore.converters'
import { ICategory } from '../../types/category.type'

// Components
import { LoadingComponent } from '../loading/loading.components'
import { ProductItem } from '../product-item/product-item.component'

// Styles
import {
  Container,
  CategoryTitle,
  IconContainer,
  ProductsContainer
} from './category-details.styles'

interface ICategoryDetailsProps {
  categoryId: string
}

export const CategoryDetails: FunctionComponent<ICategoryDetailsProps> = ({
  categoryId
}) => {
  const [category, setCategory] = useState<ICategory | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true)
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(catergoryConverter),
            where('id', '==', categoryId)
          )
        )
        const category = querySnapshot.docs[0]?.data()

        setCategory(category)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategory()
  }, [])

  const navigate = useNavigate()

  const handleClickBack = () => {
    navigate('/')
  }

  if (isLoading) return <LoadingComponent />

  return (
    <Container>
      <CategoryTitle>
        <IconContainer>
          <BiChevronLeft onClick={handleClickBack} size={36} />
        </IconContainer>
        <p>Explorar {category?.displayName}</p>
      </CategoryTitle>

      <ProductsContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  )
}
