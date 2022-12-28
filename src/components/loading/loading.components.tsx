import { FunctionComponent } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

// Styles
import { LoadingContainer } from './loading.styles'

interface LoadingProps {
  message?: string
}

export const LoadingComponent: FunctionComponent<LoadingProps> = ({
  message
}) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}
