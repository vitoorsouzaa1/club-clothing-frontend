import { FunctionComponent } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

// Styles
import { LoadingContainer } from './loading.styles'

export const LoadingComponent: FunctionComponent = () => {
  return (
    <LoadingContainer>
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}
