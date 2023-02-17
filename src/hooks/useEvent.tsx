import { useContext } from 'react'
import { EventContext } from '../presentation/context/EventContext'

export const useEvent = () => useContext(EventContext)