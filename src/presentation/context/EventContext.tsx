import { createContext, useState, ReactNode } from "react"
import { IEvent } from "../../@types/event"
import { EventList } from "../../utils/data/event"

export interface EventProps {
  events: IEvent[],
  setEvents: (events: IEvent[]) => void
}

interface EventProviderProps {
  children: ReactNode
}

export const EventContext = createContext({} as EventProps)

export function EventProvider ({ children }: EventProviderProps) {
  const [events, setEvents] = useState<IEvent[]>(EventList)
  return (
    <EventContext.Provider value={{
      events,
      setEvents
    }}>
      {children}
    </EventContext.Provider>
  )
}