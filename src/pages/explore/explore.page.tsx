import { FunctionComponent } from 'react'

// Components
import { CategoriesOverview } from '../../components/categories-overview/categories-overview.component'
import { Header } from '../../components/header/header.component'

export const ExplorePage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <CategoriesOverview />
    </>
  )
}
