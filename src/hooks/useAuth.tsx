import { useContext } from 'react'
import { AuthContext } from '../presentation/context/AuthContext'

export const useAuth = () => useContext(AuthContext)