import { AuthPageProvider } from '../../context/AuthPageContext'
export function Auth () {
  return (
    <AuthPageProvider page='signin' />
  )
}