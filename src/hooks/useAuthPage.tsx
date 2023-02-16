import { useContext } from 'react'
import { AuthPageContext } from '../presentation/context/AuthPageContext'

export const useAuthPage = () => useContext(AuthPageContext)